import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Home from "./components/Home";
import Chat from "./components/Chat";

const MainNavigator = createStackNavigator({
  Home: Home,
  Chat: Chat
});

class Navigator extends React.Component {
  render() {
    return <MainNavigator />;
  }
}

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
