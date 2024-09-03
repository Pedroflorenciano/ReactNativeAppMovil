import React from 'react'
import { Text, View } from 'react-native'
import { GlobalStyle } from '../theme/Theme'
import { PrimaryButton } from '../components/PrimaryButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RootStackProps } from '../routes/StackNavigation'

export const Inicio = () => {

    const navigation = useNavigation<NavigationProp<RootStackProps>>();

  return (
    <View style={GlobalStyle.content}>
        <PrimaryButton
            onPress={() => navigation.navigate('Alumnos')}
            label='Alumnos'
        />
        <PrimaryButton
            onPress={() => navigation.navigate('AxiosEjemplo')}
            label='Materias'
        />
    </View>
  )
}
