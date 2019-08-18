import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Header from '../components/Header';
import NewsFeed from '../components/NewsFeed';

class TopHeadlines extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header {...this.props} title="Top Headlines US" />
        <NewsFeed config={{ apiType: 'top-headlines', country: 'us' }} />
      </View>
    )
  }
}

TopHeadlines.navigationOptions = {
  header: null
}

const TopHeadlinesScreen = createStackNavigator({
  Home: TopHeadlinesScreen,
});


export default TopHeadlinesScreen;