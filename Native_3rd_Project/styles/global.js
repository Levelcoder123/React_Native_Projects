import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
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
  },

  loginButtonOfLoginPage: {
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
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: 150,
  },

  signupButtonForSignupPage: {
    backgroundColor: "black",
    color: 'white',
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

  leftContainer: {
    flex: 0,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  leftContainerHome: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    // for login.js
  },

  // for login.js
  buttonContainer: {
    alignItems: "center",
  },

  // header and Disc are for home.js
  header: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: 'center',
    marginBottom: 5,
  },

  Disc: {
    justifyContent: "center",
    color: "white",
  },

  newText: {
fontFamily: 'BrunoAceSC-Regular',
  },
});

export default Style;
