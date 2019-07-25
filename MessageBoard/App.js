import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  FlatList
} from "react-native";
import { Input, Card, Button, Icon } from "native-base";
import * as firebase from "firebase";

// Firebase config
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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      messageList: []
    };
  }

  sendMessage = message => {
    var messageListRef = firebase.database().ref("message_list");
    // push message to database
    var newMessageRef = messageListRef.push();
    newMessageRef.set({ text: message, time: Date.now() });
    this.setState({ message: "" });
  };

  updateList = messageList => {
    this.setState({ messageList: messageList });
  };

  componentDidMount() {
    // tricky stuff
    var self = this;

    var messageListRef = firebase.database().ref("message_list");

    messageListRef.on("value", dataSnapshot => {
      // into a callback
      if (dataSnapshot.val()) {
        let messageList = Object.values(dataSnapshot.val());
        self.updateList(messageList.reverse());
      }
    });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Message Board</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={this.state.messageList}
            inverted
            keyExtractor={(item, index) => item.time.toString()}
            renderItem={({ item }) => (
              <Card style={styles.listItem}>
                <Text style={styles.messageText}>{item.text}</Text>
                <Text style={styles.timeText}>
                  {new Date(item.time).toLocaleDateString}
                </Text>
              </Card>
            )}
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={text => {
              this.setState({ message: text });
            }}
            value={this.state.message}
            placeholder="Enter Message"
          />
          <Button
            danger
            rounded
            icon
            onPress={() => {
              this.sendMessage(this.state.message);
            }}
          >
            <Icon name="arrow-foward" />
          </Button>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    margin: 2,
    backgroundColor: "#01CBC6"
  },
  header: {
    backgroundColor: "#2B2B52",
    alignItems: "center",
    height: 40,
    justifyContent: "center"
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#FFF",
    fontSize: 20
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff"
  }
});
