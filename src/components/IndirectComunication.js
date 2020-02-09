import React, { Component } from 'react'
import { View, Text, TextInput } from "react-native"
import Default from '../style/default'

export const Entry = props =>
    <View>
        <TextInput value={ props.text}
                    style={Default.input}
                    onChangeText={props.callWhenChange}>
        </TextInput>
    </View>

export default class SincronizedText extends Component {

    state = {
        text: ''
    }

    changeText = text => {
        this.setState({ text })
    }

    render() {
        return (
            <View>
                <Text style={Default.font40}>{this.state.text}</Text>
                <Entry text={this.state.text} callWhenChange={this.changeText}></Entry>
            </View>
        )
    }
}