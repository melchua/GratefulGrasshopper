import React, { Component } from "react";
import { Button, Text, StyleSheet, TouchableOpacity, View } from "react-native";
// import SignInAndUpForm from "../../components/SignInAndUpForm";
import SignInForm from "../../components/SignInForm";

export default class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignInForm navigation={this.props.navigation} />
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsText}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Register</Text>
          </TouchableOpacity>
        </View>
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
  optionsContainer: {
    flexDirection: "row"
  },
  signUpText: {
    fontWeight: "700",
    fontSize: 15
  },
  optionsText: {
    fontSize: 15
  }
});
