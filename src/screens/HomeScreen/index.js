import React, { Component } from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import grasshopper from "../../assets/images/grasshopper.png";

export default class HomeScreen extends Component {
  componentDidMount() {}
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.homescreenContainer}>
        <Image source={grasshopper} style={styles.grasshopperImage} />
        <Button
          onPress={() => navigation.navigate("SignUp")}
          title="Sign Up"
          color="#841584"
          accessibilityLabel="Sign Up for application"
        />
        <Button
          onPress={() => navigation.navigate("SignIn")}
          title="Sign In"
          color="#841584"
          accessibilityLabel="Sign in to application"
        />
      </View>
    );
  }
}

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
