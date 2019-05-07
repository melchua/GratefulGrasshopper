/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import Auth from "@aws-amplify/auth";
import awsmobile from "./aws-exports";
import Amplify from "aws-amplify";
import { signUp } from "./src/services/api/auth";
import grasshopper from "./src/assets/images/grasshopper.png";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUpScreen from "./src/screens/SignUpScreen";

Amplify.configure(awsmobile);

class HomeScreen extends Component {
  componentDidMount() {
    signUp();
  }
  render() {
    return (
      <View style={styles.homescreenContainer}>
        {/* <Text>Grasshopper</Text> */}
        <Image source={grasshopper} style={styles.grasshopperImage} />
        <Button
          // onPress={onPressLearnMore}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Sign Up for application"
        />
        <Button
          // onPress={onPressLearnMore}
          title="Sign In"
          color="#841584"
          accessibilityLabel="Sign in to application"
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  SignUp: SignUpScreen
});

const styles = StyleSheet.create({
  homescreenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  grasshopperImage: {
    width: 150,
    height: 150,
    top: -50
  }
});

export default createAppContainer(AppNavigator);
