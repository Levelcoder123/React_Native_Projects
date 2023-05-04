import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  // const [expensesList, setExpensesList] = useState([
  //   {key: 1, name: "Sugar"},
  //   {key: 2, name: "Flour"},
  //   {key: 3, name: "Fruits"},
  // ]);
  return (
    <View style={initialStyle.flexBox}>
      <View style={initialStyle.leftContainer}>
        <TouchableOpacity
          style={initialStyle.loginButton}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={initialStyle.loginButtonText}>Login Page</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={initialStyle.signupButton}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={initialStyle.signupButtonText}>
            Didn't have account?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={initialStyle.rightContainer}>
        <Text style={initialStyle.header}>P2P Cloud</Text>
        <Text style={initialStyle.Disc}>
          P2P (peer-to-peer) cloud is a decentralized network architecture that
          allows direct communication between devices without the need for
          intermediaries such as servers or data centers. In a P2P cloud system,
          each device can act as both a client and a server, sharing resources
          and information with other devices on the network. P2P cloud
          technology offers a more cost-effective, scalable, and efficient way
          of sharing data, resources, and services compared to traditional
          centralized cloud architectures.
        </Text>
        {/* <View>
          <FlatList data={expensesList}
          renderItem={({ item }) => (
            <View>{item.name}</View>
          )}
        />
        </View> */}
      </View>
    </View>
  );
};

export default Home;

const initialStyle = StyleSheet.create({
  loginButton: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    height: 40,
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
  signupButton: {
    backgroundColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
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

  flexBox: {
    backgroundColor: "black",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  Disc: {
    justifyContent: "center",
    color: "white",
  },

  navigate: {
    flex: 1,
  },

  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },

  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
