import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import InfoTag from './InfoTag';

export default class InfoArea extends Component {
    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.data.map((info, index) => {
                        return <InfoTag key={index} data={info} />
                    })
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    }
})