import React from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const students = [
    { id: 1, name: 'Joao', note: 7.9 },
    { id: 2, name: 'Ana', note: 9.1 },
    { id: 3, name: 'Bia', note: 5.4 },
    { id: 4, name: 'Claudia', note: 7.6 },
    { id: 5, name: 'Roberto', note: 6.8 },
    { id: 6, name: 'Rafael', note: 9.9 },
    { id: 7, name: 'Guilherme', note: 10.0 },
    { id: 8, name: 'Rebeca', note: 8.8 },
    { id: 9, name: 'Tobias', note: 8.8 },
    { id: 10, name: 'Marcos', note: 10.0 },
    { id: 11, name: 'Joao', note: 7.9 },
    { id: 12, name: 'Ana', note: 9.1 },
    { id: 13, name: 'Bia', note: 5.4 },
    { id: 14, name: 'Claudia', note: 7.6 },
    { id: 15, name: 'Roberto', note: 6.8 },
    { id: 16, name: 'Rafael', note: 9.9 },
    { id: 17, name: 'Guilherme', note: 10.0 },
    { id: 18, name: 'Rebeca', note: 8.8 },
    { id: 19, name: 'Tobias', note: 8.8 }
]

const itemStyle = {
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    // justifyContent: 'space-around'
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
}

export const Student = props => 
    <View style={itemStyle}>
        <Text>Name: { props.name } </Text>
        <Text style={{fontWeight: 'bold'}}>Nota: { props.note }</Text>
    </View>

export default props => {
    const renderItem = ( { item }) => {
        return <Student { ... item }></Student>
    }

    return (
        <ScrollView>
            <FlatList data={students} 
                    renderItem={renderItem}
                    keyExtractor={(_, index) => index.toString()}>

            </FlatList>
        </ScrollView>
    )
}

