import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { ColorsGlobals, GlobalStyle } from '../theme/themeParcial';
import { Button, Modal, PaperProvider, Portal, TextInput, IconButton } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../routes/StackNavigationParcial';
import { PrimaryButton } from '../components/primaryButton';

export const componenteParcial01 = () => {
  const [nombre, setNombre] = React.useState("");
  const [edad, setEdad] = React.useState("");
  const [personas, setPersonas] = React.useState<{ nombre: string, edad: string }[]>([]);
  const [visible, setVisible] = React.useState(false); // Estado para el Modal

  const navigation = useNavigation<NavigationProp<RootStackProps>>();

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const agregarPersona = () => {
    if (nombre.trim() && edad.trim()) {
      setPersonas([...personas, { nombre, edad }]);
      setNombre("");
      setEdad("");
    }
  };

  return (
    <PaperProvider>
      <View style={GlobalStyle.content}>
        <View style={GlobalStyle.header}>
          <Text style={GlobalStyle.textPrimario}>
            Examen Primera Parcial
          </Text>
          <IconButton
            icon="information-outline"
            size={30}
            iconColor='white'
            onPress={showModal}
            style={{ flex: 1, alignItems: 'flex-end' }}
          />
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
              <Text style={GlobalStyle.textSecundario}>Bienvenidos al examen</Text>
              <Button mode="contained" onPress={hideModal} style={styles.closeButton}>
                Cerrar
              </Button>
            </Modal>
          </Portal>
        </View>
        <View style={GlobalStyle.body}>
          <Text style={GlobalStyle.textSecundario}>
            Ingrese su nombre
          </Text>
          <TextInput
            mode='outlined'
            style={{ marginVertical: 10 }}
            value={nombre}
            onChangeText={text => setNombre(text)}
            activeOutlineColor={ColorsGlobals.secundario}
          />
          <Text style={GlobalStyle.textSecundario}>
            Ingrese su edad
          </Text>
          <TextInput
            mode='outlined'
            style={{ marginVertical: 10 }}
            value={edad}
            onChangeText={text => setEdad(text)}
            activeOutlineColor={ColorsGlobals.secundario}
            keyboardType='numeric'
          />
          <Pressable
            style={GlobalStyle.buttonSecundario}
            onPress={agregarPersona}
          >
            <Text style={GlobalStyle.textPrimario}>Agregar</Text>
          </Pressable>



          <PrimaryButton
            onPress={() => navigation.navigate('PropsParcial', { personas })}
            label='Props'
          />
          <PrimaryButton
            onPress={() => navigation.navigate('AxiosParcial')}
            label='Axios'
          />
          <PrimaryButton
            onPress={() => navigation.navigate('AsyncStorageParcial')}
            label='AsyncStorage'
          />
        </View>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create ({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: ColorsGlobals.primario
  }
})

export default componenteParcial01;
