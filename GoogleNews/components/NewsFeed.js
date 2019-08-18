import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';

import { getNews, Parameters } from '../utils/api';
import Feed from './Feed';

export default class NewsFeed extends Component {

	state = {
		page: 1,
		articles: [],
		isLoadingMore: false,
	}

	async componentDidMount() {
		const data = await getNews({ q: 'love' }, 'all');
		this.setState({
			articles: data.articles
		});
	}

	scrollToTop = () => {
		this.flatListRef.scrollToIndex({ animated: true, index: 0 });
	}

	getMoreFeed = async () => {
		await this.setState({
			isLoadingMore: true
		})

		const { page, articles } = this.state;
		const data = await getNews({ q: 'love', page: page + 1 }, 'all');
		const newArticles = data.articles || [];

		console.log(data);

		this.setState({
			page: page + 1,
			articles: [...articles, ...newArticles],
			isLoadingMore: false
		})
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
						return <Feed data={item} />
					}}
					onEndReached={() => {
						this.getMoreFeed();
					}}
					ListEmptyComponent={
						<ActivityIndicator size="large" />
					}
					ListHeaderComponent={
						<Text style={styles.newsCount}>{this.state.articles.length + ' news.'}</Text>
					}
					ListFooterComponent={
						this.state.isLoadingMore &&
						<ActivityIndicator size="large" />
					}
				/>
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
	btnScrollToTop: {
		position: 'absolute',
		bottom: 10,
		// padding: 15,
		width: 50,
		height: 50,
		borderRadius: 25,
		alignSelf: 'center',
	},
	newsCount: {
		alignSelf: 'center',
		color: '#555',
		fontSize: 20,
		fontWeight: 'bold',
	}
});
