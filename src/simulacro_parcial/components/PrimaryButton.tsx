import { Text } from '@rneui/base'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Button } from '@rneui/themed';

interface Button{
    onPress: () => void;
    label: string; 
}

export const PrimaryButton = ({onPress, label}: Button) => {
  return (
    <Pressable
        style={Style.PrimaryButton}
        onPress={ () => onPress()}
    >
        <Text style={Style.PrimaryButtonText}>{label}</Text>
    </Pressable>
  )
}

const Style = StyleSheet.create({
    PrimaryButton: {
        backgroundColor: '#004379',
        borderRadius: 20,
        marginBottom: 10,
        padding: 20
    },
    PrimaryButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
