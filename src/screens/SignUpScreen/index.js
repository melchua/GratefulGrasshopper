import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import SignUpForm from "../../components/SignUpForm";
import { inject, observer } from "mobx-react";

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm navigation={this.props.navigation} />
      </View>
    );
  }
}

export default observer(inject("authStore")(SignUpScreen));

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
