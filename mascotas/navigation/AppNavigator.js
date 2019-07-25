import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import AddAdoptScreen from "../screens/AddAdoptScreen";

export default createAppContainer(
  createStackNavigator({
    Tabs: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        header: null,
      })
    },
    Add: {
      screen: AddAdoptScreen,
    }
  }, {
    initialRouteName: 'Tabs',
  })
);