import React, { Component } from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import grasshopper from "../../assets/images/grasshopper.png";

export default class HomeScreen extends Component {
  componentDidMount() {}
  render() {
    return (
      <View style={styles.homescreenContainer}>
        <Image source={grasshopper} style={styles.grasshopperImage} />
        <Text>This is the protected app screen</Text>
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
