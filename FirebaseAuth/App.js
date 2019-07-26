import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import * as firebase from "firebase";

// import all screens
import HomeScreen from "./screens/HomeScreen";
import LoadingScreen from "./screens/LoadingScreen";
import SignupScreen from "./screens/SignUpScreen";
import SigninScreen from "./screens/SignInScreen";

var firebaseConfig = {
  apiKey: "AIzaSyB5Xwvx5Ja-LOV51eqnLF7SDxxmkI-mgVY",
  authDomain: "reactbootcamp-f1e3d.firebaseapp.com",
  databaseURL: "https://reactbootcamp-f1e3d.firebaseio.com",
  projectId: "reactbootcamp-f1e3d",
  storageBucket: "reactbootcamp-f1e3d.appspot.com",
  messagingSenderId: "240091173780",
  appId: "1:240091173780:web:9b370b6d72f7f79e"
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator(
  {
    Loading: {
      screen: LoadingScreen
    },
    SignIn: {
      screen: SigninScreen
    },
    SignUp: {
      screen: SignupScreen
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    //launcher screen
    initialRouteName: "Loading"
  }
);

// create app container
const App = createAppContainer(MainNavigator);
export default App;
