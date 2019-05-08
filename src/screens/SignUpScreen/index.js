import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SignInAndUpForm from "../../components/SignInAndUpForm";

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <Text>SignUp Screen</Text> */}
        <SignInAndUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ddb39"
  },
  grasshopperImage: {
    width: 150,
    height: 150,
    top: -50
  }
});
