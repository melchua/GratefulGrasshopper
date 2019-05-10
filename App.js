/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import awsmobile from "./aws-exports";
import Amplify from "aws-amplify";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";
import ConfirmScreen from "./src/screens/ConfirmScreen";
import HomeScreen from "./src/screens/HomeScreen";

// Imports for store setup
import { Provider } from "mobx-react";
import RootStoreModel from "./src/stores/root-store";

Amplify.configure(awsmobile);

class App extends Component {
  state = {
    isLoading: false
  };
  async componentDidMount() {
    this.setState({ rootStore: await RootStoreModel.create({}) });
  }

  render() {
    const rootStore = this.state && this.state.rootStore;

    if (!rootStore) {
      return null;
    }
    // Prep stores for provider
    const stores = {
      rootStore: rootStore,
      authStore: rootStore.authStore
    };

    return (
      <Provider {...stores}>
        <AppNavContainer />
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUpScreen,
    SignIn: SignInScreen,
    Confirm: ConfirmScreen
  },
  { initialRouteName: "Confirm" }
);

const AppNavContainer = createAppContainer(AppNavigator);

export default App;
