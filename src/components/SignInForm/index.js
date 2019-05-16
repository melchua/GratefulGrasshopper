import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { inject, observer } from "mobx-react";
import {
  isUsernameFieldFilled,
  isPasswordFieldFilled,
  doesPasswordContainCorrectNumberOfCharacters,
  doesPasswordContainANumber,
  doesPasswordContainASymbol,
  doesPasswordContainCapitalLetter
} from "../../utilities/validator";

class SignInForm extends Component {
  state = {
    username: null,
    password: null,
    isErrorVisible: false
  };

  handleSignIn = async (username, password) => {
    const { navigation } = this.props;
    const { authStore } = this.props;

    // We validate before sending data
    let validationResponse = this.validate(username, password);
    if (validationResponse !== true) {
      this.showError(validationResponse);
    } else {
      this.removeError();
      const user = await authStore.signIn(username, password);
      if (user.hasOwnProperty("code")) {
        console.warn("there was an error");
        this.showError(user.message);
      } else {
        this.removeError();
        // console.warn("good to go");
        navigation.navigate("App");
        // now we should send to the protected stack (for the note functionality)
      }
    }
  };

  // inputs: username, password
  // returns: error string or true(boolean)
  validate = (username, password) => {
    if (isUsernameFieldFilled(username) !== true) {
      return isUsernameFieldFilled(username);
    }
    if (isPasswordFieldFilled(password) !== true) {
      return isPasswordFieldFilled(password);
    }
    if (doesPasswordContainCorrectNumberOfCharacters(password) !== true) {
      return doesPasswordContainCorrectNumberOfCharacters(password);
    }
    if (doesPasswordContainANumber(password) !== true) {
      return doesPasswordContainANumber(password);
    }
    if (doesPasswordContainASymbol(password) !== true) {
      return doesPasswordContainASymbol(password);
    }
    if (doesPasswordContainCapitalLetter(password) !== true) {
      return doesPasswordContainCapitalLetter(password);
    } else return true;
  };

  showError = error => {
    this.setState({ errorMessage: error, isErrorVisible: true });
  };

  removeError = () => {
    this.setState({ errorMessage: null, isErrorVisible: false });
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View>
          <Text style={styles.inputLabel}>User Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter email address"
            autoCapitalize="none"
            onChangeText={username => this.setState({ username })}
            autoFocus={true}
            autoCorrect={false}
            clearButtonMode="always"
          />
        </View>

        <View>
          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            autoCapitalize="none"
            onChangeText={password => this.setState({ password })}
            autoCorrect={false}
            clearButtonMode="always"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() =>
              this.handleSignIn(this.state.username, this.state.password)
            }
          >
            <Text style={styles.signUpButtonText}>Sign-In</Text>
          </TouchableOpacity>
        </View>
        {this.state.isErrorVisible && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Error: {this.state.errorMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default inject("authStore")(observer(SignInForm));

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 300,
    fontSize: 25,
    color: "white",
    fontWeight: "400"
  },
  //   mainContainer: {
  //     backgroundColor: "#8ddb39"
  //   },
  errorContainer: {
    justifyContent: "flex-start",
    alignItems: "center"
  },
  errorText: {
    fontStyle: "italic"
  },
  inputContainer: {
    paddingTop: 15
  },
  inputLabel: {
    color: "white",
    fontSize: 16
  },
  signUpButton: {
    borderWidth: 1,
    borderColor: "transparent",
    backgroundColor: "transparent",
    padding: 15,
    margin: 5
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 70,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700"
  }
});
