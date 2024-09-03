import { StyleSheet } from "react-native"

export const GlobalColors = {
    primiario: '#00297a',
    blanco: 'white',
    negro: 'black'
}

export const GlobalStyle = StyleSheet.create({
    content: {
        flex: 1,
        padding: 20,
        backgroundColor: GlobalColors.blanco
    },
    primaryButton: {
        backgroundColor: GlobalColors.primiario,
        padding: 10,
        marginBottom: 20,
        width: '100%',
        borderRadius: 30
    },
    primatyButttonText: {
        color: GlobalColors.blanco,
        fontSize: 20,
        fontWeight: '900',
        textAlign: 'center'
    }
})