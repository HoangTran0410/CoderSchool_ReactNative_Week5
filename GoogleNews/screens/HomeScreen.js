import React, { Component } from 'react';
import { View } from 'react-native';

import NewsFeed from '../components/NewsFeed';

export default class HomeScreen extends Component {
  render() {
    return (
      <NewsFeed />
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'Home'
}