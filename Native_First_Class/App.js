import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const changeEmail = (a) => {
    setEmail(a);
  };
  const changePassword = (e) => {
    setPassword(e);
  };

  return (
    <View style={{ padding: 15 }}>
      <Text> {email} </Text>
      <Text> {password} </Text>
      <View>
        <TextInput onChangeText={changeEmail} placeholder="Enter Your Email" />
      </View>
      <TextInput
        onChangeText={changePassword}
        keyboardType="numeric"
        placeholder="Enter Your Password"
        secureTextEntry={true}
      />
      <View>
        <Button title="Submit" color="black"/>
        {/*"on press" value is fake for now.*/}
      </View>
    </View>
  );
};
