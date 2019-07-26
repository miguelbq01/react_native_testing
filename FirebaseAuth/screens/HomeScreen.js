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
      <LinearGradient
        colors={["#6388f2", "#8763f2", "#6388f2"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require("../assets/logo.png")}
            />
          </View>
          <View style={styles.userDetails}>
            <Text style={styles.whiteText}> Hey {this.state.name} </Text>
            <Text style={styles.whiteText}>
              Your are signed in as: {this.state.email}
            </Text>
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
        </View>
      </LinearGradient>
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
    marginTop: 150,
    marginBottom: 10
  },
  logoImage: {
    width: 260,
    height: 110
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
    paddingRight: 15
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  whiteText: {
    color: "#FFF"
  }
});
