import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Alumnos } from '../screens/Alumnos';
import { Materias } from '../screens/Materias';
import AxiosEjemplo from '../screens/AxiosEjemplo';

export type RootStackProps = {
    Inicio: undefined;
    Alumnos: undefined;
    AxiosEjemplo: undefined; 
}

const Stack = createStackNavigator<RootStackProps>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Alumnos" component={Alumnos} />
      <Stack.Screen name="AxiosEjemplo" component={AxiosEjemplo} />
    </Stack.Navigator>
  );
}