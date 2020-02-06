import React from 'react'
import { View, Text } from 'react-native'

const font = { style: { fontSize: 30 }}

export const Child = props => 
    <View>
        <Text { ...font }>Filho: { props.name } { props.lastname} </Text>
    </View>

export const Father = props => 
    <View>
        <Text { ...font }>Pai: { props.name } { props.lastname }</Text>
        { props.children }
    </View>

export const GranFather = props => 
    <View>
        <Text { ...font }>Avô: { props.name } { props.lastname }</Text>
        <Father name='Paulo' lastname={props.lastname}>
            <Child name='Ana'></Child>
            <Child name='Guilherme'></Child>
            <Child name='Davi'></Child>
        </Father>
        <Father { ...props} name='Pedro'>
            <Child name="Rebeca"></Child>
            <Child name="Renato"></Child>
        </Father>
    </View>

export default GranFather