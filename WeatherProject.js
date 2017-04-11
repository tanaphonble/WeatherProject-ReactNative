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
            zip: '45130',
            forecast: {
                main: 'Clouds',
                description: 'few clouds',
                temp: 45.7
            }
        })
    },

    _hendleTextChange(event) {
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
                {/*<Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />*/}
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                />
                <TextInput
                    style={styles.input}
                    returnKeyType='go'
                    onSubmitEditing={this._hendleTextChange} />
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
        borderWidth: 2,
        height: 50,
        width: 300,
        textAlign: 'center'
    }
})

export default WeatherProject