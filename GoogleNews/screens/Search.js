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
    this.setState({
      qInTitle: searchValue
    },
      () => {
        this.newsFeed.componentDidMount();
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderSearch {...this.props} title="Search" onPressSearchBtn={this.onPressSearchBtn} />
        <NewsFeed
          ref={(ref) => { this.newsFeed = ref }}
          config={{
            qInTitle: this.state.qInTitle,
            apiType: 'everything',
            sortBy: 'popularity'
          }}
          {...this.props}
        />
      </View>
    )
  }
}
