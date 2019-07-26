import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import * as firebase from "firebase";

export default class LoadingScreen extends React.Component {
  static navigationOptions = {
    title: "Loading",
    header: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if (authenticate) {
        this.props.navigation.replace("Home");
      } else {
        this.props.navigation.replace("SignIn");
      }
    });
  }

  render() {
    return (
      <LinearGradient
        colors={["#6388f2", "#8763f2", "#6388f2"]}
        style={styles.linearGradient}
      >
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  }
});
