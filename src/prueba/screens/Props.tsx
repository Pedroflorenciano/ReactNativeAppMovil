import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';
import { GlobalStyle } from '../theme/Theme';
import { RootStackProps } from '../routes/StackNavigation';

export const Props = () => {
  const route = useRoute<RouteProp<RootStackProps, 'Props'>>();
  const { nombres } = route.params;  

  return (
    <ScrollView contentContainerStyle={GlobalStyle.content}>
      <View style={GlobalStyle.body}>
        {nombres.length > 0 ? (
          nombres.map((nombre, index) => (
            <Card key={index} style={GlobalStyle.card}>
              <Card.Title title={`Nombre ${index + 1}`} />
              <Card.Content>
                <Text style={GlobalStyle.textPrimario}>{nombre}</Text>
              </Card.Content>
            </Card>
          ))
        ) : (
          <Text style={GlobalStyle.textSecundario}>No hay nombres guardados.</Text>
        )}
      </View>
    </ScrollView>
  );
};
