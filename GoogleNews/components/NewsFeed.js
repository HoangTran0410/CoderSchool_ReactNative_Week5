import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';

import { getNews } from '../utils/api';
import Feed from './Feed';

export default class NewsFeed extends Component {

	state = {
		page: 1,
		articles: [],
		isLoadingMore: false,
		isRefreshing: false,
	}

	componentDidMount = async () => {
		try {
			const { config } = this.props;
			const data = await getNews({ ...config });

			if (data.status == 'error') throw new Error(data.message)
			if (!data.articles || data.articles.length == 0) throw new Error('Không có kết quả nào');

			console.log(data);

			this.setState({
				articles: data.articles || [],
			});

		} catch (err) {
			alert('Error: Can not get news. ' + err);
		}
	}

	scrollToTop = () => {
		this.flatListRef.scrollToIndex({ animated: true, index: 0 });
	}

	// scrollToDown = () => {
	// 	this.flatListRef.scrollToEnd({ animated: true });
	// }

	getMoreFeed = async () => {
		try {
			await this.setState({
				isLoadingMore: true
			})

			const { page, articles } = this.state;
			const { config } = this.props;
			const data = await getNews({ page: page + 1, ...config });

			if (data.status == 'error') throw new Error(data.message)

			const newArticles = data.articles || [];

			console.log(data);

			await this.setState({
				page: page + 1,
				articles: [...articles, ...newArticles],
			})

		} catch (err) {
			alert("Error: Can not get more news. " + err);

		} finally {
			this.setState({
				isLoadingMore: false
			})
		}
	}

	render() {
		return (
			<View style={styles.container} >
				<FlatList
					ref={(ref) => { this.flatListRef = ref; }}
					style={styles.flatList}

					data={this.state.articles}
					extraData={this.state.articles}
					keyExtractor={(item, index) => index + ''}
					renderItem={({ item, index }) => {
						return <Feed data={item} {...this.props} />
					}}

					refreshControl={
						<RefreshControl
							refreshing={this.state.isRefreshing}
							onRefresh={this.componentDidMount}
						/>
					}
					onEndReached={() => {
						this.getMoreFeed();
					}}
					ListEmptyComponent={
						<ActivityIndicator size="large" />
					}
					ListHeaderComponent={
						<View>
							<Text style={styles.newsCount}>{'Loaded ' + this.state.articles.length + ' news.'}</Text>
							<Text style={styles.pullDown}>{'Pull down to refresh'}</Text>
						</View>
					}
					ListFooterComponent={
						this.state.isLoadingMore &&
						<ActivityIndicator size="large" />
					}
				/>
				<View style={styles.containerBtn}>
					<Button
						buttonStyle={styles.btnScrollToTop}
						// type="clear"
						onPress={this.scrollToTop}
						icon={
							<Icon
								name='chevron-up'
								type='font-awesome'
								color='white'
							/>
						}
					/>
					{/* <Button
						buttonStyle={styles.btnScrollToTop}
						// type="clear"
						onPress={this.scrollToDown}
						icon={
							<Icon
								name='chevron-down'
								type='font-awesome'
								color='white'
							/>
						}
					/> */}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		justifyContent: 'center',
	},
	flatList: {
		width: '100%',
	},
	containerBtn: {
		flexDirection: 'row',
		position: 'absolute',
		bottom: 10,
		right: 0,
	},
	btnScrollToTop: {
		// padding: 15,
		width: 50,
		height: 50,
		margin: 5,
		borderRadius: 25,
		alignSelf: 'center',
		backgroundColor: '#007acc99'
	},
	newsCount: {
		alignSelf: 'center',
		color: '#555',
		fontSize: 20,
		fontWeight: 'bold',
	},
	pullDown: {
		alignSelf: 'center',
		fontSize: 12,
		color: '#888'
	}
});
