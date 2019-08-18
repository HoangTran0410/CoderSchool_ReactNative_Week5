import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Technology extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Technology";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/tech.png')}
        style={{ width: 26, height: 26, tintColor: '#02f' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Technology" />
        <NewsFeed config={{ apiType: 'top-headlines', category: 'technology', country: 'us' }} />
      </View>
    )
  }
}