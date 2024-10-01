import React from "react";
import Login from "./src/pages/Login";
import Cadastro from "./src/pages/Cadastro";
import Home from "./src/pages/Home";
import EsqueceuSenha from "./src/pages/EsqueceuSenha";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="Cadastro" component={Cadastro} />
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
