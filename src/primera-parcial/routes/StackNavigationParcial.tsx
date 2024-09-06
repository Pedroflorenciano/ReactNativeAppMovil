import { createStackNavigator } from '@react-navigation/stack';

import { ColorsGlobals } from '../theme/themeParcial';
import { componenteParcial01 } from '../screens/ComponenteParcial01';
import { propsParcial } from '../screens/PropsParcial';
import { axiosParcial } from '../screens/AxiosParcial';
import AsyncStorageParcial from '../screens/AsyncStorageParcial';


export type RootStackProps = {
    ComponenteParcial01: undefined;
    PropsParcial: { personas: { nombre: string; edad: string }[]; };  
    AxiosParcial: undefined;
    AsyncStorageParcial: undefined;
};


const Stack = createStackNavigator<RootStackProps>();

export const StackNavigationParcial = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: ColorsGlobals.primario, 
                },
                headerTintColor: ColorsGlobals.blanco,
            }}>
            <Stack.Screen name="ComponenteParcial01" component={componenteParcial01} options={{ headerShown: false }} />
            <Stack.Screen name="PropsParcial" component={ propsParcial } />
            <Stack.Screen name="AxiosParcial" component={ axiosParcial} />
            <Stack.Screen name="AsyncStorageParcial" component={AsyncStorageParcial} />
        </Stack.Navigator>
    );
}