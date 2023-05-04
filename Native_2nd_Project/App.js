import { StatusBar } from "expo-status-bar";
import {
  // StyleSheet,
  // Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/screens/home";
import Login from "./components/screens/login";
import SignUp from "./components/screens/signUp";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home Page" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login Page" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign up Page" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
