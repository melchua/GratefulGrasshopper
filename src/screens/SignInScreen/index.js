import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
// import SignInAndUpForm from "../../components/SignInAndUpForm";
import SignInForm from "../../components/SignInForm";

export default class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b176ed"
  },
  grasshopperImage: {
    width: 150,
    height: 150,
    top: -50
  }
});
