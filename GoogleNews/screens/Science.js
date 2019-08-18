import React, { Component } from 'react';
import { View, Image } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class Science extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Science";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/science.png')}
        style={{ width: 26, height: 26, tintColor: '#020' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Science" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us', category: 'science' }} />
      </View>
    )
  }
}
