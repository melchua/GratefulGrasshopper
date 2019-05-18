import React from "react";
import {
  ActivityIndicator,
  StatusBar,
  Text,
  StyleSheet,
  View
} from "react-native";
import { inject, observer } from "mobx-react";

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this.navigateToScreen();
  }

  navigateToScreen = async () => {
    // console.warn("huh", await this.props.authStore.checkIfLoggedIn());
    this.props.navigation.navigate(
      (await this.props.authStore.checkIfLoggedIn()) ? "App" : "Auth"
    );
  };

  // Render any loading content that you like here
  render() {
    // console.warn(this.props.authStore.isLoggedIn);
    // this.props.navigation.navigate(
    //   this.props.authStore.isLoggedIn ? "App" : "Auth"
    // );

    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading</Text>
        <Text>
          is Logged In: {this.props.authStore.isLoggedIn ? "true" : "false"}
        </Text>
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default inject("authStore")(observer(AuthLoadingScreen));
