import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { inject, observer } from "mobx-react";

class SignInAndUpForm extends Component {
  state = {
    username: null,
    password: null,
    retypePassword: null
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

        {/* // when pressing button, it should:
            // 1. check if user already exists (eers)
            // 2. if user exists, resets form and try again
            // 3. if user doesn't exist, then check if passwords match
            // 4. if passwords match then navigate to protected stack and set the
            // the current user in MST and make sure it's set in the session (how does aws do this?)

            // Question for Josh:
            // Should these be actions in the MST model? or should they just be
            // helper actions for the API? a little fuzzy here 
            
            Keep the validation on the component, and then submit the username and password as props to api call
            */}

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={() =>
              this.props.authStore.register(
                this.state.username,
                this.state.password
              )
            }
          >
            <Text style={styles.signUpButtonText}>Sign-Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default observer(inject("authStore")(SignInAndUpForm));

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
