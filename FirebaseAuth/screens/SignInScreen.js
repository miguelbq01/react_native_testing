import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from "react-native";
import * as firebase from "firebase";
import { Form, Item, Input, Label, Button } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default class SigninScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  static navigationOptions = {
    title: "SignIn",
    header: null
  };

  signInUser = (email, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.replace("Home");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  render() {
    return (
      <LinearGradient
        colors={["#6388f2", "#8763f2", "#6388f2"]}
        style={styles.linearGradient}
      >
        <KeyboardAvoidingView behavior="position" enabled>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logoImage}
              source={require("../assets/logo.png")}
            />
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label style={styles.label}>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label style={styles.label}>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.signInUser(this.state.email, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </Button>
          </Form>
          <View style={styles.footer}>
            <Text style={styles.label}>OR</Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.label}>Create a new Account?</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 150,
    marginBottom: 50
  },
  logoImage: {
    width: 260,
    height: 110
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
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
  },
  label: {
    color: "#FFF"
  }
});
