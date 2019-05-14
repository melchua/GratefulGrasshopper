import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  TextInput
} from "react-native";

class ConfirmScreen extends Component {
  state = {
    code: ""
  };
  handleConfirm = async (username, code) => {
    const { navigation } = this.props;
    const { authStore } = this.props;
    const response = await authStore.confirm(username, code);
    console.warn("code: ", code);
    console.warn("response: ", response);
    if (response === true) {
      // send to sign-in screen with username pre-populated
      navigation.navigate("SignIn", { username });
    } else {
      // display error to screen
    }
  };
  render() {
    const { navigation } = this.props;
    const username = navigation.getParam(
      "username",
      "mel.chua+11@m56studios.com"
    );

    // console.warn("username entered previously:", username);

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.inputLabel}>Please enter verification code</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter verification code"
            autoCapitalize="none"
            onChangeText={code => this.setState({ code })}
            autoFocus={true}
            autoCorrect={false}
            clearButtonMode="always"
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleConfirm(username, this.state.code)}
          >
            <Text style={styles.buttonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default inject("authStore")(observer(ConfirmScreen));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b176ed"
  },
  textInput: {
    height: 50,
    width: 300,
    fontSize: 25,
    color: "white",
    fontWeight: "400"
  },
  inputLabel: {
    color: "white",
    fontSize: 16
  },
  button: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
    padding: 15,
    margin: 5
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 70,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700"
  }
});
