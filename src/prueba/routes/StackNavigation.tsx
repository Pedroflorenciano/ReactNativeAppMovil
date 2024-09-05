import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Props } from '../screens/Props';
import { Axios } from '../screens/Axios';
import { ColorsGlobals } from '../theme/Theme';
import AsyncStorageCRUD from '../screens/AsyncStorage';
import { Imagen } from '../screens/Imagen';


export type RootStackProps = {
    Inicio: undefined;
    Props: { nombres: string[] };  
    Axios: undefined;
    AsyncStorage: undefined;
    Imagen: undefined;
};


const Stack = createStackNavigator<RootStackProps>();

export const StackNavigationPrueba = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: ColorsGlobals.primario, 
                },
                headerTintColor: ColorsGlobals.blanco,
            }}>
            <Stack.Screen name="Inicio" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Props" component={Props} />
            <Stack.Screen name="Axios" component={Axios} />
            <Stack.Screen name="AsyncStorage" component={AsyncStorageCRUD} />
            <Stack.Screen name="Imagen" component={Imagen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
}