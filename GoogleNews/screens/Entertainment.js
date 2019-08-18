import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Entertainment extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Entertainment";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/entertainment.png')}
        style={{ width: 26, height: 26, tintColor: '#000' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Entertainment" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us', category: 'entertainment' }} {...this.props} />
      </View>
    )
  }
}
