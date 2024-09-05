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
        padding: 20,
    },
    header:{
        backgroundColor: ColorsGlobals.primario,
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPrimario: {
        color: ColorsGlobals.blanco,
        fontSize: 20,
        fontWeight: 'bold',
    },
    textSecundario: {
        color: ColorsGlobals.secundario,
        fontSize: 15,
        fontWeight: 'bold'
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
    },
    headerImg:{
        backgroundColor: ColorsGlobals.primario,
        padding: 20,
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    bodyImg:{
        flex: 1,
        padding: 20,
    },
    imagen: {
        borderRadius: 100,
        height: 200,
        width: 200,
        marginBottom: 20
    },
    textImg: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    textImgTitle:{
        color: ColorsGlobals.terciario,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    }
})