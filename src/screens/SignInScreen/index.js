import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
// import SignInAndUpForm from "../../components/SignInAndUpForm";

export default class SignIncreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn Screen</Text>
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
