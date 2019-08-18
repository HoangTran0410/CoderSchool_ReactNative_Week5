import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Sports extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Sports";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/sports.png')}
        style={{ width: 26, height: 26, tintColor: '#45a' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Sports" />
        <NewsFeed config={{ apiType: 'top-headlines', category: 'sports', country: 'us' }} />
      </View>
    )
  }
}