import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Style from "../../styles/global";
import { useFonts } from "expo-font";

const Login = ({ navigation, route }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [fontsLoaded] = useFonts({
    "BrunoAceSC-Regular": require("../../assets/Fonts/BrunoAceSC-Regular.ttf"),
  });

  const changeName = (a) => {
    setName(a);
  };

  const changePassword = (b) => {
    setPassword(b);
  };

  return (
    <View>
      <TouchableOpacity>
        <Button
          title="Home Page"
          style={Style.loginButtonText}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
      </TouchableOpacity>

      <Text style={Style.newText}>New Font Text</Text>
      <View>
        <Text style={Style.newText}>
          {route.params.name}
        </Text>
      </View>
    </View>
  );
};

export default Login;
