import React, { Component } from 'react';
import { View, Image } from 'react-native';

import HeaderSearch from '../components/HeaderSearch';
import NewsFeed from '../components/NewsFeed';

export default class Search extends Component {

  static navigationOptions = ({ navigation }) => {
    let drawerLabel = "Search";
    let drawerIcon = () => {
      return <Image
        source={require('../assets/icons/search.png')}
        style={{ width: 26, height: 26, tintColor: '#000' }}
      />
    }

    return { drawerLabel, drawerIcon }
  }

  state = {
    qInTitle: 'react native'
  }

  onPressSearchBtn = (searchValue) => {
    alert(searchValue)
    this.setState({ qInTitle: searchValue })
  }

  render() {
    const { qInTitle } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <HeaderSearch {...this.props} title="Search" onPressSearchBtn={this.onPressSearchBtn} />
        <NewsFeed config={{ apiType: 'everything', qInTitle, sortBy: 'popularity' }} {...this.props} />
      </View>
    )
  }
}
