import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Image style={styles.logo} source={require("./CAYMAN ISLANDS REAL ESTATE MARKET EXPLORER LOGO BLACK.png")} />
          <Text style={styles.text}>{"Welcome to the \nCayman Islands \nReal Estate Market Explorer!\n          "}</Text>
          <Text style={styles.instructions}>{"\n            Explore properties, find your dream home, and make informed decisions\n            about the Real Estate Market in the Cayman Islands.\n          "}</Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  group: {
    alignItems: "center",
    marginBottom: 20
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  instructions: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20
  },
  footer: {
    fontSize: 12,
    color: "#888",
    textAlign: "center"
  }
};
export default WelcomeScreen;