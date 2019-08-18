import React, { Component } from 'react';
import { View, StyleSheet, Text, ActivityIndicator, TouchableWithoutFeedback, TouchableOpacity, Linking } from 'react-native';
import { Image, Button } from 'react-native-elements';

import { daysBetween } from '../utils/api';

class ReadMore extends Component {
	render() {
		const { content, description, onPress } = this.props;
		return (
			<View>
				<Text style={styles.txtDescription}>{description}</Text>
				<Text style={styles.txtContent}>{content}</Text>
				<Button
					title="Read more"
					onPress={onPress}
				/>
			</View>
		)
	}
}

export default class Feed extends Component {

	state = {
		isViewingContent: false
	}

	onPressFeed = () => {
		this.setState({
			isViewingContent: !this.state.isViewingContent
		})
	}

	onPressReadMore = () => {
		// alert(this.props.data.url)
		Linking.openURL(this.props.data.url);
	}

	render() {
		const { source, author, title, description, url, urlToImage, publishedAt, content } = this.props.data;
		return (
			<View style={styles.container}>

				<TouchableWithoutFeedback onPress={this.onPressFeed} style={styles.imgContainer}>
					<Image
						style={styles.img}
						source={{ uri: urlToImage }}
						PlaceholderContent={<ActivityIndicator />}
					/>
				</TouchableWithoutFeedback>

				<TouchableOpacity onPress={this.onPressFeed} >
					{/* <View style={styles.contentsContainer}> */}
						<Text style={styles.txtSource}>{source.name + ' - Author: ' + author}</Text>
						<Text style={styles.txtTitle}>{title}</Text>
					{/* </View> */}
				</TouchableOpacity>

				{
					this.state.isViewingContent &&
					<ReadMore
						description={description}
						content={content}
						onPress={this.onPressReadMore}
					/>
				}
				<Text style={styles.txtTime}>{'🕑 ' + daysBetween(new Date(publishedAt), new Date())}</Text>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		// flexDirection: 'row',
		// justifyContent: 'space-between',
		flex: 100,
		width: '100%',
		padding: 5,
		borderBottomColor: '#ddd',
		borderBottomWidth: 1,
	},
	contentsContainer: {
		// paddingVertical: 10,
		paddingHorizontal: 10,
	},
	txtSource: {
		fontSize: 12,
		color: '#555',
		padding: 5
	},
	txtTitle: {
		fontSize: 19,
		fontWeight: 'bold',
		padding: 5
	},
	txtTime: {
		fontSize: 12,
		color: '#555',
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
	txtContent: {
		fontSize: 14,
		color: '#333',
		padding: 10,
	},
	txtDescription: {
		fontSize: 15,
		padding: 5,
	},
	imgContainer: {
		// padding: 5,
	},
	img: {
		resizeMode: 'cover',
		width: '100%',
		height: 200,
		borderRadius: 10,
		borderColor: '#ddd',
		borderWidth: 1
	}
})