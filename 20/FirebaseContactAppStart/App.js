// install react-navigation

//TODO: import four screens
import HomeScreen from "./screens/HomeScreen";
import AddNewContact from "./screens/AddNewContact";
import ViewContact from "./screens/ViewContact";
import EditContact from "./screens/EditContact";

//TODO: import firebase
import * as firebase from "firebase";

// set up react navigation
import { createStackNavigator, createAppContainer } from "react-navigation";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Add: { screen: AddNewContact },
    View: { screen: ViewContact },
    Edit: { screen: EditContact }
  },
  {
    defaultNavigationOptions: {
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: "#B83227"
      },
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const App = createAppContainer(MainNavigator);

//TODO: Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB5Xwvx5Ja-LOV51eqnLF7SDxxmkI-mgVY",
  authDomain: "reactbootcamp-f1e3d.firebaseapp.com",
  databaseURL: "https://reactbootcamp-f1e3d.firebaseio.com",
  projectId: "reactbootcamp-f1e3d",
  storageBucket: "reactbootcamp-f1e3d.appspot.com",
  messagingSenderId: "240091173780",
  appId: "1:240091173780:web:9b370b6d72f7f79e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//FirebaseTODO create firebase real-time database with rules

// {
//   "rules": {
//     ".read": true,
//     ".write": true
//   }
// }
export default App;
