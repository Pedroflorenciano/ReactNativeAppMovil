import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { RootStackProps } from '../routes/StackNavigation'
import { PrimaryButton } from '../components/PrimaryButton'
import { Icon } from 'react-native-paper'

export const Inicio = () => {

    const navigate = useNavigation<NavigationProp<RootStackProps>>();
    const params = useRoute<RouteProp<RootStackProps, 'Inicio'>>().params;

    const nombre = params.nombre
    const apellido = params.apellido

    return (
        <View style={Style.content}>
            <View style={Style.header}>
                <Text style={Style.text}>Hola... <Text style={Style.textSpan}>{params.nombre} {params.apellido}</Text></Text>
            </View>
            <View style={Style.presable}>
                <PrimaryButton
                    onPress={() => navigate.navigate('Props', {nombre, apellido} )}
                    label='PROPS'
                />
                <PrimaryButton
                    onPress={() => navigate.navigate('Axios')}
                    label='AXIOS'
                />
                <PrimaryButton
                    onPress={() => navigate.navigate('AsyncStorage')}
                    label='AsyncStorange'
                />
            </View>
            <View style={Style.footer}>
                <Pressable
                    onPress={() => navigate.navigate('Login')}
                >
                    <Text style={Style.text}><Icon
                        source="exit-to-app"
                        color='white'
                        size={20}
                    /> Volver a ingresar</Text>
                </Pressable>
            </View>
        </View>
    )
}

const Style = StyleSheet.create({
    content: {
        flex: 1
    },
    content2: {
        flex: 1,
        backgroundColor: '#ffff',
        padding: 20
    },
    header: {
        backgroundColor: '#004379',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        padding: 20,
        textAlign: 'center'
    },
    textSpan: {
        fontWeight: 'bold'
    },
    presable: {
        flex: 1,
        padding: 20,
        backgroundColor: 'white'
    },
    footer: {
        backgroundColor: '#004379',
    }
})
