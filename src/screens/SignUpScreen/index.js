import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import SignUpForm from "../../components/SignUpForm";
import { inject, observer } from "mobx-react";

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm navigation={this.props.navigation} />
        <View style={styles.optionsContainer}>
          <Text style={styles.optionsText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignIn")}
          >
            <Text style={styles.signInText}>Sign-In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject("authStore")(observer(SignUpScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8ddb39"
  },
  optionsContainer: {
    flexDirection: "row"
  },
  signInText: {
    fontWeight: "700",
    fontSize: 15
  },
  optionsText: {
    fontSize: 15
  }
});
