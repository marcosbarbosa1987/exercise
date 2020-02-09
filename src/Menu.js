import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Sample from './components/Sample'
import ParImpar from './components/ParImpar'
import { Inverse, MegaSena } from './components/Multi'
import Counter from './components/Counter'
import Platform from './components/Platforms'
import ValidProps from './components/ValidateProps'
import Event from './components/Event'
import GrandFather, { GranFather } from './components/DirectComunication'
import SincronizedText from './components/IndirectComunication'
import ListFlex from './components/ListFlex'
import Flex from './components/Flex'

export default createDrawerNavigator({
    Flex: {
        screen: () => <Flex></Flex>
    },
    ListFlex: {
        screen: () => <ListFlex></ListFlex>,
        navigationOptions: { title: 'Lista (Flex Box)'},
    },
    SincronizedText: {
        screen: () => <SincronizedText></SincronizedText>
    },
    GrandFather: {
        screen: () => <GranFather name='Julio' lastname='Silva' ></GranFather>
    },
    Event: {
        screen: () => <Event></Event>
    },
    ValidProps: {
        screen: () => <ValidProps year={'1999'}></ValidProps>
    },
    Platform: {
        screen: () => <Platform></Platform>
    },
    Counter: {
        screen: () => <Counter></Counter>
    },
    MegaSena: {
        screen: () => <MegaSena number={6}></MegaSena>,
        navigationOptions: { title: 'Mega Sena'},
    },
    Inverse: {
        screen: () => <Inverse text='React Native!!!'></Inverse>
    },
    ParImpar: {
        screen: () => <ParImpar number={30}></ParImpar>,
        navigationOptions: {
            title: 'Par & Impar'
        } 
    },
    Sample: {
        screen: () => <Sample text = 'Flexible!!!'></Sample>
    }
}, {drawerWidth: 300})