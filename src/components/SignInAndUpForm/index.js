import React, { Component } from "react";
import { TextInput, StyleSheet, View } from "react-native";

export default class SignInAndUpForm extends Component {
  render() {
    return (
      <View>
        <TextInput
          style={styles.textInput}
          placeholder="Enter email address"
          autoCapitalize="none"
          //   onChangeText={text => this.setState({ text })}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter password"
          autoCapitalize="none"
          //   onChangeText={text => this.setState({ text })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 250,
    fontSize: 25
  }
});
