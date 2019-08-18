import React, { Component } from 'react';
import { WebView, Image, View, ActivityIndicator } from 'react-native';
import Constants from 'expo-constants';

import Header from '../components/Header';

export default class WebViewNews extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "News Viewing";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/eye.png')}
        style={{ width: 26, height: 26, tintColor: '#f45' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  state = {
    loading: true,
  }

  showSpinner(show) {
    if(!show) console.log('finish')
    this.setState({ loading: show });
  }

  render() {
    let url = 'https://facebook.github.io/react-native/docs/flatlist.html';
    if (this.props.navigation.state.params) {
      url = this.props.navigation.state.params.url;
    }
    console.log(this.props);
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Viewing" />
        <WebView
          onLoad={() => this.showSpinner(false)}
          // onNavigationStateChange={() => this.showSpinner(true)}
          source={{ uri: url }}
        />
        {this.state.loading && (
          <ActivityIndicator
            style={{ position: "absolute", top: Constants.statusBarHeight + 5, right: 20 }}
            size="large"
          />
        )}
      </View>
    );
  }
}