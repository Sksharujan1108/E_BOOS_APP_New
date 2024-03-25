import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './stack/AuthStack';

const Routes = () => {
  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
  )
}

export default Routes