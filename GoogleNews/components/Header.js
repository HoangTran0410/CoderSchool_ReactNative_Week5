import React, { Component } from 'react';
import { View } from 'react-native';

import Constants from 'expo-constants';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Icon, Text } from 'react-native-elements';

export default class Header extends Component {
  render() {
    return (
      <View style={{
        marginTop: Constants.statusBarHeight,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>

        <TouchableHighlight
          style={{
            padding: 15
          }}
          onPress={() => {
            const { toggleDrawer } = this.props.navigation;
            toggleDrawer();
          }}
        >
          <Icon
            name="bars"
            type="font-awesome"
          />
        </TouchableHighlight>

        <Text h4> {this.props.title} </Text>

      </View>
    )
  }
}
