import React from "react";
import { View, ImageBackground, StyleSheet, Image, Text } from "react-native";

import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={[styles.button, styles.primaryButton]}></View>
          <View style={[styles.button, styles.secondaryButton]}></View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 15,
  },
  button: {
    height: 70,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
  },
  primaryButton: {
    backgroundColor: colors.primary,
  },
  header: {
    alignItems: "center",
  },
});
