import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import Follow from "./screens/Follow";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Follow: { screen: Follow }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#FFF",
      headerStyle: { backgroundColor: "darkcyan" },
      headerTitleStyle: { color: "#FFF" }
    }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
