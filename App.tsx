import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import { StackNavigation } from './src/simulacro_parcial/routes/StackNavigation';
// import { StackNavigationPrueba } from './src/prueba/routes/StackNavigation';
import { StackNavigationParcial } from './src/primera-parcial/routes/StackNavigationParcial';

export const App = () => {
  return (

    <NavigationContainer>
      <StackNavigationParcial/>
    </NavigationContainer>
      
  )
}
