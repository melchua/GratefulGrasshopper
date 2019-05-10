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
  doesPasswordContainANumber
} from "../../utilities/validator";

class SignUpForm extends Component {
  state = {
    username: null,
    password: null,
    retypePassword: null,
    isErrorVisible: false
  };

  handleSignUp = async (username, password) => {
    const { navigation } = this.props;
    const {
      authStore: { isChecking }
    } = this.props;

    // We validate before sending data
    const validationResponse = this.validate(username, password);
    if (validationResponse !== true) {
      this.showError(validationResponse);
    } else {
      const response = await this.props.authStore.register(username, password);
      if (
        typeof response === "boolean" &&
        response === true &&
        isChecking === false
      ) {
        this.props.authStore.setConfirmationRequired();
        navigation.navigate("Confirm");
      } else if (typeof response === "string") {
        this.showError(response);
      } else if (typeof response === "object") {
        this.showError(response.message);
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
    } else return true;
  };

  showError = error => {
    this.setState({ errorMessage: error, isErrorVisible: true });
  };

  removeError = () => {
    this.setState({ isErrorVisible: false });
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
        <View>
          <Text style={styles.inputLabel}>Re-enter Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Re-enter password"
            autoCapitalize="none"
            onChangeText={retypePassword => this.setState({ retypePassword })}
            autoCorrect={false}
            clearButtonMode="always"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() =>
              this.handleSignUp(this.state.username, this.state.password)
            }
          >
            <Text style={styles.signUpButtonText}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
        {this.state.isErrorVisible && (
          <View style={styles.errorContainer}>
            <Text>Error: {this.state.errorMessage} </Text>
          </View>
        )}
      </View>
    );
  }
}

export default observer(inject("authStore")(SignUpForm));

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 300,
    fontSize: 25,
    color: "darkgreen",
    fontWeight: "400"
  },
  //   mainContainer: {
  //     backgroundColor: "#8ddb39"
  //   },
  errorContainer: {
    justifyContent: "flex-start",
    alignItems: "center"
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
