import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const ValidateProps = props => 
    <Text style={{ fontSize: 35 }}>
        {props.label}
        {props.year + 2000}
    </Text>

ValidateProps.defaultProps = {
    label: 'Ano: '
}

ValidateProps.PropTypes = {
    year: PropTypes.number.isRequired
}

export default ValidateProps