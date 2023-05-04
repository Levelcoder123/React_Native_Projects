import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();

  const changeName = (a) => {
    setName(a);
  };

  const changePassword = (b) => {
    setPassword(b);
  };

  return (
    <View style={initialStyle.flexBox}>
      <View style={initialStyle.leftContainer}>
        <TouchableOpacity
        style={initialStyle.loginButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={initialStyle.loginButtonText}>Didn't have account?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={initialStyle.loginButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={initialStyle.loginButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
      <View style={initialStyle.rightContainer}>
        <View>
          <TextInput
            onChangeText={changeName}
            placeholder="Enter Your Name"
            style={initialStyle.input}
          />

          <TextInput
            onChangeText={changePassword}
            keyboardType="numeric"
            placeholder="Enter Your Password"
            secureTextEntry={true}
            style={initialStyle.input}
          />
        </View>
        <View style={initialStyle.buttonContainer}>
          <TouchableOpacity style={initialStyle.loginButton}>
            <Text style={initialStyle.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const initialStyle = StyleSheet.create({
  flexBox: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  input: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#333",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    textAlign: "center",
    width: 170,
  },

  loginButton: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 150,
  },

  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  leftContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
  },

  rightContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  buttonContainer: {
    alignItems: "center",
  },
});
