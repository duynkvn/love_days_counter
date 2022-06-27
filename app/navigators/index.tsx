import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN } from './const';
import Home from "../screen/Home";
import Settings from '../screen/Settings';

const Stack = createNativeStackNavigator();

function AppStack() {
    return (
        <Stack.Navigator
            initialRouteName={SCREEN.HOME}
            screenOptions={{
                headerShown: false,
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
                headerBackTitle: '',
            }}
        >
            <Stack.Screen
                name={SCREEN.HOME}
                component={Home}
            />
            <Stack.Screen
                name={SCREEN.SETTINGS}
                component={Settings}
            />
        </Stack.Navigator>
    );
}


export default AppStack;
