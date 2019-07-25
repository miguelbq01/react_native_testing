import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./screens/Home";
import CameraScreen from "./screens/Camera";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Camera: { screen: CameraScreen }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: {
        backgroundColor: "darkcyan"
      },
      headerTitleStyle: {
        color: "#FFF"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);
export default App;
