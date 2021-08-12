import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
      <View
        style={[
          styles.box,
          {
            backgroundColor: colors.primary,
            left: 10,
          },
        ]}
      ></View>
      <View
        style={[
          styles.box,
          {
            backgroundColor: colors.secondary,
            right: 10,
          },
        ]}
      ></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
  },
  box: {
    width: 50,
    height: 50,
    position: "absolute",
    top: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
