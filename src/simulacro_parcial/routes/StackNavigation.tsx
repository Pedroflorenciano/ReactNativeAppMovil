import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Axios } from '../screens/Axios/Axios';
import { Props } from '../screens/Props/Props';
import { Login } from '../screens/Login';
import AsyncStorageCRUD from '../screens/AsyncStore/AsyncStorageCRUD';


export type RootStackProps = {
    Login: undefined;
    Inicio: { nombre: string, apellido: string };
    Axios: undefined;
    Props: { nombre: string, apellido: string };
    AsyncStorage: undefined;
}

const Stack = createStackNavigator<RootStackProps>();

export const StackNavigation = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#004379', 
                },
                headerTintColor: '#fff',
                
            }}>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
            <Stack.Screen name="Axios" component={Axios} />
            <Stack.Screen name="Props" component={Props} />
            <Stack.Screen name="AsyncStorage" component={AsyncStorageCRUD} />
        </Stack.Navigator>
    );
}