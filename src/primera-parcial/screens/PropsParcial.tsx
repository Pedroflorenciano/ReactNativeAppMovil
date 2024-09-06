import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { GlobalStyle } from '../theme/themeParcial';
import { RootStackProps } from '../routes/StackNavigationParcial';

export const propsParcial = () => {
  const route = useRoute<RouteProp<RootStackProps, 'PropsParcial'>>();
  const { personas } = route.params;

  return (
    <ScrollView contentContainerStyle={GlobalStyle.content}>
      <View style={GlobalStyle.body}>
        {personas.length > 0 ? (
          personas.map((persona, index) => (
            <Card key={index} style={GlobalStyle.card}>
              <Card.Title title={`Persona ${index + 1}`} />
              <Card.Content>
                <Text style={GlobalStyle.textPrimario}>
                  {`Mi nombre es: ${persona.nombre}`}
                </Text>
                <Text style={GlobalStyle.textPrimario}>
                  {`y tengo: ${persona.edad} años`}
                </Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text style={GlobalStyle.textSecundario}>No hay personas guardadas.</Text>
        )}
      </View>
    </ScrollView>
  );
};
