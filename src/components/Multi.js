import React from 'react'
import { Text } from 'react-native'
import Default from '../style/default'

export const Inverse = props => {
    const inverse = props.text.split('').reverse().join('')

    return <Text style={Default.ex}>{inverse}</Text>
}

export const MegaSena = props => {
    const [min, max] = [1, 60]
    const numbers = Array(props.numbers || 6).fill(0)

    for (let i = 0; i < numbers.length; i++) {
        let newNumber = 0
        while (numbers.includes(newNumber)) {
            newNumber = Math.floor(Math.random() * (max - min + 1)) + min
        }
        numbers[i] = newNumber
    }

    numbers.sort((a,b) => a - b)
    return <Text style={Default.ex}>{numbers.join(', ')}</Text>
}