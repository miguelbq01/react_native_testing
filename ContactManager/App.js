// import screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContactScreen from "./screens/AddNewContactScreen";
import EditContactScreen from "./screens/EditContactScreen";
import ViewContactScreen from "./screens/ViewContactScreen";

// import react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";
import { create } from "uuid-js";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContactScreen },
    Edit: { screen: EditContactScreen },
    View: { screen: ViewContactScreen }
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
