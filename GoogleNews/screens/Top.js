import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Top extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Top Headlines";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/hot.png')}
        style={{ width: 26, height: 26, tintColor: '#f45' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Top Headlines" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us' }} />
      </View>
    )
  }
}
