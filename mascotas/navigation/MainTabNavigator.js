import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AddAdoptScreen from "../screens/AddAdoptScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Adoptar",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-paw"} />
};

HomeStack.path = "";

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Perdidos",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-search"} />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Perfil",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"ios-person"} />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
