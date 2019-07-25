import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import { Entypo } from "@expo/vector-icons";

import { MonoText } from "../components/StyledText";

const logo = require("../assets/images/logo.png");
const cardImage = require("../assets/images/drawer-cover.png");

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}
        >
          <View style={styles.welcomeContainer}>
            <Content padder>
              <Card style={styles.mb}>
                <CardItem>
                  <Left>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>GeekyAnts</Text>
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={cardImage}
                  />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>4923 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>89 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
            <Content padder>
              <Card style={styles.mb}>
                <CardItem>
                  <Left>
                    <Thumbnail source={logo} />
                    <Body>
                      <Text>NativeBase</Text>
                      <Text note>GeekyAnts</Text>
                    </Body>
                  </Left>
                </CardItem>

                <CardItem cardBody>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: null,
                      height: 200,
                      flex: 1
                    }}
                    source={cardImage}
                  />
                </CardItem>

                <CardItem style={{ paddingVertical: 0 }}>
                  <Left>
                    <Button transparent>
                      <Icon active name="thumbs-up" />
                      <Text>4923 Likes</Text>
                    </Button>
                  </Left>
                  <Body>
                    <Button transparent>
                      <Icon active name="chatbubbles" />
                      <Text>89 Comments</Text>
                    </Button>
                  </Body>
                  <Right>
                    <Text>11h ago</Text>
                  </Right>
                </CardItem>
              </Card>
            </Content>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            // add icon
            //navigate to Add Contact screen
            this.props.navigation.navigate("Add");
          }}
          style={styles.floatButton}
        >
          <Entypo name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  floatButton: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    position: "absolute",
    bottom: 10,
    right: 10,
    height: 50,
    backgroundColor: "darkcyan",
    borderRadius: 100
  }
});
