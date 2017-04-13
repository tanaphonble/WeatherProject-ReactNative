import React, { createClass } from 'react'
import { StyleSheet, Text, View } from 'react-native'

var Forecast = createClass({
    render: function () {
        return (
            <View>
                <Text style={styles.bigText}>
                    {this.props.main}
                    {/*Forecast*/}
                </Text>
                <Text style={styles.mainText}>
                    Current conditions: {this.props.description}
                </Text>
                <Text style={styles.bigText}>
                    {this.props.temp}°F
                </Text>
            </View>
        )
    }
})

var styles = StyleSheet.create({
    bigText: {
        // flex: 1,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF',
        backgroundColor: 'skyblue'
    },
    mainText: {
        // flex: 1,
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        backgroundColor: 'powderblue'
    }
})

export default Forecast