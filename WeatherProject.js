import React, { createClass } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image
} from 'react-native'

import Forecast from './Forecast'

let WeatherProject = createClass({
    getInitialState() {
        return ({
            zip: 'test',
            forecast: {
                main: 'Clouds',
                description: 'few clouds',
                temp: 45.7
            }
        })
    },

    _handleTextChange(event) {
        console.log('cd')
        this.setState({
            zip: event.nativeEvent.text
        })
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Your input {this.state.zip} 
                </Text>
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubmitEditing={this._handleTextChange} />
            </View>
        )
    }
})

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4D4D4D'

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    input: {
        fontSize: 20,
        height: 40,
        borderWidth: 2
    }
})

export default WeatherProject