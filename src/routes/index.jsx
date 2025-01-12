
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import TelaInicial from "../pages/TelaInicial";
import TelaLogin from "../pages/TelaLogin"

const Stack = createNativeStackNavigator()


export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="TelaInicial"
                component={TelaInicial}
                options={{headerShown: false}}
            />


            <Stack.Screen
                name="TelaLogin"
                component={TelaLogin}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}