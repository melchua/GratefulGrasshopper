import React, { Component } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { inject, observer } from "mobx-react";
import grasshopper from "../../assets/images/grasshopper.png";

class HomeScreen extends Component {
  handleLogout = () => {
    this.props.authStore.signOut();
    this.props.navigation.navigate("SignIn");
  };

  render() {
    return (
      <View style={styles.homescreenContainer}>
        <Image source={grasshopper} style={styles.grasshopperImage} />
        <Text>This is the protected app screen</Text>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => this.handleLogout()}
          >
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject("authStore")(observer(HomeScreen));

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
  },
  inputContainer: {
    paddingTop: 15
  },
  inputLabel: {
    color: "white",
    fontSize: 16
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
    padding: 15,
    margin: 5
  },
  logoutButtonText: {
    color: "#000000",
    fontSize: 70,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700"
  }
});
