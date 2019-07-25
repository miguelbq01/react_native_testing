import React from "react";
import { Text, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right
} from "native-base";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });

    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/original/products/125956/119225/Slipknot-Text-Band-Logo-Vinyl-Decal-Sticker__35183.1507851522.jpg?c=2&imbypass=on"
                  }}
                />
                <Body>
                  <Text>Mike Bolaños</Text>
                  <Text note>Senior Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://trademe.tmcdn.co.nz/photoserver/full/868826401.jpg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://cdn11.bigcommerce.com/s-sq9zkarfah/images/stencil/original/products/125956/119225/Slipknot-Text-Band-Logo-Vinyl-Decal-Sticker__35183.1507851522.jpg?c=2&imbypass=on"
                  }}
                />
                <Body>
                  <Text>Mike Bolaños</Text>
                  <Text note>Senior Developer</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    "https://trademe.tmcdn.co.nz/photoserver/full/868826401.jpg"
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
