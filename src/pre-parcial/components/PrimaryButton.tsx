import React from 'react'
import { Pressable, Text } from 'react-native'
import { GlobalStyle } from '../theme/Theme';

interface props{
    onPress: () => void;
    label: string;
}

export const PrimaryButton = ({onPress, label}: props) => {
  return (
    <Pressable
        style={GlobalStyle.primaryButton}
        onPress={() => onPress()}
    >
        <Text style={GlobalStyle.primatyButttonText}>{label}</Text>
    </Pressable>
  )
}
