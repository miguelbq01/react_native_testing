import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "native-base";
import * as firebase from "firebase";
import { LinearGradient } from "expo-linear-gradient";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    };
  }

  static navigationOptions = {
    title: "Home",
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName
        });
      } else {
        this.props.navigation.replace("SignIn");
      }
    });
  }

  signOutUser = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("Sign Out");
      })
      .catch(error => alert(error.message));
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={["#6388f2", "#8763f2", "#6388f2"]}
          style={styles.linearGradient}
        >
          <View style={styles.logoContainer}>
            <Image source={require("../assets/logo.png")} />
          </View>
          <View style={styles.userDetails}>
            <Text> Hey {this.state.name} </Text>
            <Text> Your are signed in as: {this.state.email} </Text>
          </View>
          <Button
            style={styles.button}
            full
            rounded
            success
            onPress={() => {
              this.signOutUser();
            }}
          >
            <Text style={styles.buttonText}>SignOut</Text>
          </Button>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 20
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100,
    width: 5
  },
  userDetails: {},

  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});
