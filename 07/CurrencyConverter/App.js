import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Keyboard,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.00"
    };
  }

  buttonPressed = currency => {
    if (this.state.inputValue === "") {
      Alert.alert("Enter some value");
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];

    this.setState({ resultValue: result.toFixed(2) });
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>{this.state.resultValue}</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                keyboardType="numeric"
                placeholder="Enter Value"
                value={this.state.input}
                onChangeText={inputValue => this.setState({ inputValue })}
              />
            </View>
            <View style={styles.converterbuttoncontainer}>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("DOLLAR")}
              >
                <Text style={styles.converterbuttontext}>$</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("EURO")}
              >
                <Text style={styles.converterbuttontext}>Euro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.converterbutton}
                onPress={() => this.buttonPressed("POUND")}
              >
                <Text style={styles.converterbuttontext}>Pound</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#888"
  },
  screenview: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#0A79DE",
    alignItems: "center",
    borderWidth: 2
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFF"
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#c1c1c1",
    borderWidth: 2,
    backgroundColor: "#0A79DE"
  },
  input: {
    color: "#FFF",
    fontSize: 30
  },
  converterbuttoncontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#c1c1c1",
    borderWidth: 2
  },
  converterbutton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#c1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterbuttontext: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold"
  }
});
