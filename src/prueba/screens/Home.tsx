import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { ColorsGlobals, GlobalStyle } from '../theme/Theme';
import { Icon, TextInput } from 'react-native-paper';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackProps } from '../routes/StackNavigation';
import { PrimaryButton } from '../components/PrimaryButton';

export const Home = () => {
  const [nombre, setNombre] = React.useState("");
  const [nombres, setNombres] = React.useState<string[]>([]);

  const navigation = useNavigation<NavigationProp<RootStackProps>>();


  const agregarNombre = () => {
    if (nombre.trim()) {
      setNombres([...nombres, nombre]);
      setNombre("");
    }
  };

  return (
    <View style={GlobalStyle.content}>
      <View style={GlobalStyle.header}>
        <Text style={[GlobalStyle.textPrimario, { flex: 1, }]}>
          INICIO
        </Text>
        <Pressable onPress={ () => navigation.navigate('Imagen')}>
          <Icon
            source="account"
            color={ColorsGlobals.blanco}
            size={40} />
        </Pressable>
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
        <Pressable
          style={GlobalStyle.buttonSecundario}
          onPress={agregarNombre}
        >
          <Text style={GlobalStyle.textPrimario}>Agregar</Text>
        </Pressable>

        <PrimaryButton
          onPress={() => navigation.navigate('Props', { nombres })}
          label='Props'
        />
        <PrimaryButton
          onPress={() => navigation.navigate('Axios')}
          label='Axios'
        />
        <PrimaryButton
          onPress={() => navigation.navigate('AsyncStorage')}
          label='AsyncStorage'
        />
      </View>
    </View>
  );
};
