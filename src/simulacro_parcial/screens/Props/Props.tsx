import { useRoute, RouteProp } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RootStackProps } from '../../routes/StackNavigation';

export const Props = () => {

  const params = useRoute<RouteProp<RootStackProps, 'Props'>>().params;

  return (
    <View style={Style.content}>
      <Text style={Style.title}>Los props vienen del login...</Text>
      <Text style={Style.title}>Nombre: <Text style={Style.text}>{params.nombre}</Text></Text>
      <Text style={Style.title}>Apellido: <Text style={Style.text}>{params.apellido}</Text></Text>
    </View>
  )
}

const Style = StyleSheet.create({
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  title: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 25,
    color: '#004379',
    fontWeight: 'bold'
  }
})