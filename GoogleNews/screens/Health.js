import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Health extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Health";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/health.png')}
        style={{ width: 26, height: 26, tintColor: '#0f0' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Health" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us', category: 'health' }} />
      </View>
    )
  }
}
