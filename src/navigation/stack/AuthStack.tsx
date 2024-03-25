import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from '../../screen/Auth/Landing';
import SignInClock from '../../screen/Auth/SignIn-Clock';
import SignInEmail from '../../screen/Auth/SignUp-Email';
import SignUpOtp from '../../screen/Auth/SignUp-Otp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName = 'Landing'
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name = "LandingScreen" component={Landing} />
      <Stack.Screen name = "SignInClockScreen" component={SignInClock} />
      <Stack.Screen name = "SignInEmailScreen" component={SignInEmail} />
      <Stack.Screen name = "SignUpOtpScreen" component={SignUpOtp} />
      
    </Stack.Navigator>
  )
}

export default AuthStack