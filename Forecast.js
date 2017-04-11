import React, { createClass } from 'react'
import { StyleSheet, Text, View } from 'react-native'

let Forecast = createClass({
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

let styles = StyleSheet.create({
    bigText: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#FFFFFF'
    },
    mainText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF'
    }
})

export default Forecast