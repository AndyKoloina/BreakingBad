import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../components/Welcome'
import AppContainer from '../components/AppContainer'
import CharacterDetails from '../components/CharacterDetails'
const WelcomeStack = createStackNavigator()

export const WelcomeScreen = () => {
    return(
        <WelcomeStack.Navigator initialRouteName='Welcome'>
            <WelcomeStack.Screen name='Home' component={Welcome} options={{ headerShown: false }}/>
            <WelcomeStack.Screen name='AppContainer' component={AppContainer}  options={{ title: 'List of Characters'}}/>
            <WelcomeStack.Screen name='CharacterDetails' component={CharacterDetails}  options={{ title: 'Characters details'}}/>
        </WelcomeStack.Navigator>
    )
}