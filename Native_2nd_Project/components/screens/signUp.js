import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View style={initialStyle.flexBox}>
      <View style={initialStyle.rightContainer}>
        <TextInput
          onChangeText={setName}
          placeholder="Enter Name"
          style={initialStyle.input}
        />

        <TextInput
          onChangeText={setUserName}
          placeholder="Enter User Name"
          style={initialStyle.input}
        />
        <TextInput
          onChangeText={setPassword}
          keyboardType="numeric"
          placeholder="Enter Password"
          secureTextEntry={true}
          style={initialStyle.input}
        />

        <TextInput
          onChangeText={setConfirmPassword}
          keyboardType="numeric"
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={initialStyle.input}
        />
        <TouchableOpacity
          style={initialStyle.signupButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={initialStyle.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={initialStyle.leftContainer}>
        <TouchableOpacity
          style={initialStyle.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={initialStyle.loginButtonText}>
            Already have an account?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={initialStyle.homeButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={initialStyle.homeButtonText}>Home Page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

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

  homeButton: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 150,
    marginLeft: 20,
  },

  homeButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
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
    marginLeft: 20,
  },

  loginButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  signupButton: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightblue",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 150,
  },
  signupButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  // header: {
  //   color: "white",
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   textAlign: "center",
  //   marginBottom: 10,
  // },

  leftContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  rightContainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "flex-end",
  },
});
