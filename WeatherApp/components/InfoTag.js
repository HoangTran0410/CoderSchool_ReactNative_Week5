import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class InfoTag extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.value}>{this.props.data.value}</Text>
                <Text style={styles.type}>{this.props.data.type}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
    value: {
        fontSize: 30,
    },
    type: {
        fontSize: 10
    }
})