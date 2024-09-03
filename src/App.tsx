import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './simulacro_parcial/routes/StackNavigation';

export const App = () => {
  return (

    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
      
  )
}
