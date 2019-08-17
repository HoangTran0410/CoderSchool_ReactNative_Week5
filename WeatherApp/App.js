import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InfoArea from './components/InfoArea';
import { getWeather, fakeData } from './utils/Api';

export default class App extends Component {

  componentDidMount() {
    getWeather(10.832535, 106.565987);
  }

  render() {
    return (
      <View style={styles.container}>
        <InfoArea data={fakeData}/>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
