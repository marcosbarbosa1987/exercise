import React from 'react'
import { Text } from 'react-native'

import Default from '../style/default'

// export default (props) => 
//   <Text> Arrow: {props.text} </Text>

  export default (props) => {
      return (
          <Text style={[Default.ex]}>
              {props.text}
          </Text>
      )
 }