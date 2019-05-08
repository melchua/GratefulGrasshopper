/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import awsmobile from "./aws-exports";
import Amplify from "aws-amplify";
import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUpScreen from "./src/screens/SignUpScreen";
import HomeScreen from "./src/screens/HomeScreen";

Amplify.configure(awsmobile);

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SignUp: SignUpScreen
  },
  { initialRouteName: "Home" }
);

export default createAppContainer(AppNavigator);
