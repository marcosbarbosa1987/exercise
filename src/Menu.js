import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Sample from './components/Sample'
import ParImpar from './components/ParImpar'
import { Inverse, MegaSena } from './components/Multi'

export default createDrawerNavigator({
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