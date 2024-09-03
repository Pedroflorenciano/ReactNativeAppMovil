import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { PrimaryButton } from '../components/PrimaryButton';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../routes/StackNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Login = () => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const navigation = useNavigation<NavigationProp<RootStackProps>>();

    return (
        <View style={Style.content}>
            <View style={Style.header}>
                <Text style={Style.text}>
                    ¡BIENVENIDO!
                </Text>
                <Text style={Style.text2}>
                    Para acceder al sistema debe ingresar sus datos...
                </Text>
            </View>
            <View style={Style.content2}>
                <Text style={Style.TextInput}>Nombre</Text>
                <TextInput
                    style={{ marginBottom: 20 }}
                    mode='outlined'
                    value={nombre}
                    onChangeText={setNombre}
                />
                <Text style={Style.TextInput}>Apellido</Text>
                <TextInput
                    style={{ marginBottom: 20 }}
                    mode='outlined'
                    value={apellido}
                    onChangeText={setApellido}
                />
                <PrimaryButton
                    onPress={ () => navigation.navigate('Inicio', {nombre, apellido})}
                    label='Ingresar'
                />
            </View>
        </View>
    );
}


const Style = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'white',
    },
    content2: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    header: {
        backgroundColor: '#004379',
        flex: 1,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        marginBottom: 30
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    text2: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    TextInput: {
        color: 'black',
        marginBottom: 5,
        fontSize: 15
    }
})