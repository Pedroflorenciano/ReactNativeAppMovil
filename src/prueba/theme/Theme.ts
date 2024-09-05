import { StyleSheet } from "react-native"

export const ColorsGlobals = {
    primario: '#960018',
    secundario: '#3c0000',
    terciario: '#670010',

    blanco: 'white',
    negro: 'black'
}

export const GlobalStyle = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: ColorsGlobals.blanco
    },
    body:{
        flex: 1,
        padding: 20
    },
    header:{
        backgroundColor: ColorsGlobals.primario,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textPrimario: {
        color: ColorsGlobals.blanco,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textSecundario: {
        color: ColorsGlobals.secundario,
        fontSize: 15,
    },
    textInput:{
        marginTop: 10,
    },
    PrimaryButton: {
        backgroundColor: ColorsGlobals.terciario,
        borderRadius: 20,
        marginBottom: 10,
        padding: 20
    },
    buttonSecundario: {
        backgroundColor: ColorsGlobals.secundario,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    card: {
        backgroundColor: ColorsGlobals.primario,
        marginBottom: 10,
    }
})