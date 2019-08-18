import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Business extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Business";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/business.png')}
        style={{ width: 26, height: 26, tintColor: '#a5f' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Business" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us', category: 'business' }} {...this.props} />
      </View>
    )
  }
}
