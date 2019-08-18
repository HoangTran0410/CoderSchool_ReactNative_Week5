import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import Constants from 'expo-constants';
import { Icon, Text, Button, Overlay, Input } from 'react-native-elements';

export default class Header extends Component {

	state = {
		modalVisible: false,
		searchValue: ''
	}

	setModalVisible = (value) => {
		this.setState({
			modalVisible: value,
		})
	}

	onPressSearchBtn = () => {
		this.props.onPressSearchBtn(this.state.searchValue);
		this.setModalVisible(false);
	}

	renderOverlay = () => {
		return (
			<Overlay
				height='auto'
				isVisible={this.state.modalVisible}
				onBackdropPress={() => this.setModalVisible(false)}
			>
				<Input
					onChangeText={(text) => { this.setState({ searchValue: text }) }}
					value={this.state.searchValue}
					placeholder='Search here...'
					inputStyle={{
						padding: 10,
					}}
					leftIcon={
						<Icon
							name='search'
							type='font-awesome'
							color='gray'
						/>
					}
				/>
				<Button
					title="Search"
					onPress={this.onPressSearchBtn}
				/>
			</Overlay>
		)
	}

	render() {
		return (
			<View style={{
				marginTop: Constants.statusBarHeight,
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
			}}>

				<TouchableOpacity
					style={{
						padding: 15,
					}}
					onPress={() => {
						const { toggleDrawer } = this.props.navigation;
						toggleDrawer();
					}}
				>
					<Icon
						name="bars"
						type="font-awesome"
					/>
				</TouchableOpacity>

				<Text h4> {this.props.title} </Text>

				{
					this.renderOverlay()
				}

				<Button
					buttonStyle={{
						borderRadius: 10,
					}}
					containerStyle={{
						position: 'absolute',
						right: 5,
					}}
					icon={
						<Icon
							name="search"
							type="font-awesome"
							color="white"
						/>
					}
					onPress={() => {
						this.setModalVisible(true);
					}}
				/>

			</View>
		)
	}
}
