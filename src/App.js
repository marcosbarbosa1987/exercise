import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Sample from './components/Sample'
import ParImpar from './components/ParImpar'
import { Inverse, MegaSena } from './components/Multi'

export default class App extends Component {

	render() {
		return(
			<View style={style.container}>
				<Sample text='Flexible'></Sample>
				<ParImpar number={27}></ParImpar>
				<Inverse text='React Native!'></Inverse>
				<MegaSena></MegaSena>
			</View>
		)
	}
}

const style = StyleSheet.create({
	container: {
		flex:1,
		justifyContent: "center",
		alignItems: "center",
	}
})