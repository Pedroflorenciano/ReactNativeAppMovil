import { Text } from '@rneui/base'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed';
import { GlobalStyle } from '../theme/Theme';

interface Button{
    onPress: () => void;
    label: string; 
}

export const PrimaryButton = ({onPress, label}: Button) => {
  return (
    <Pressable
        style={GlobalStyle.PrimaryButton}
        onPress={ () => onPress()}
    >
        <Text style={GlobalStyle.textPrimario}>{label}</Text>
    </Pressable>
  )
}
