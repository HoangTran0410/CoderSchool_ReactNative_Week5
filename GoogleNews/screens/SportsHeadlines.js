import React, { Component } from 'react';
import { View } from 'react-native';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

export default class SportsHeadlines extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Sports" />
        <NewsFeed config={{ apiType: 'top-headlines', category: 'sports' }} />
      </View>
    )
  }
}

SportsHeadlines.navigationOptions = {
  header: null
}