import React from 'react'
import {View,Text} from 'react-native'

 const ErrorMessage = ({message}) => {
    return (
        <View>
            <Text> {message}</Text>
        </View>
    )
}

export default ErrorMessage