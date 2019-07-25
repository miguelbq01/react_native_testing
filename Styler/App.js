import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ width: 50, height: 50, backgroundColor: "#2475B0" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#10A881" }} />
        <View style={{ width: 150, height: 150, backgroundColor: "#E74292" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
