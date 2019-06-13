import React from "react";
import { View, StyleSheet, Image } from "react-native";
import NameText from "./src/components/NameText";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NameText name="Mike" />
        <Image source={require("./src/images/email.png")} />
        <Image
          source={{
            uri:
              "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjv19mQ-sHiAhXVpZ4KHadPBu0QjRx6BAgBEAU&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D733241481&psig=AOvVaw0KxHo9FNLB6c4Bs2yGpQXB&ust=1559261028660028"
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }
});
