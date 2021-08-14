import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/chair.jpg")} style={styles.image} />
      <MaterialCommunityIcons
        name="trash-can-outline"
        style={[styles.icon, styles.deleteIcon]}
      />
      <MaterialCommunityIcons
        name="close"
        style={[styles.icon, styles.closeIcon]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    right: 20,
  },
  deleteIcon: {
    left: 20,
  },
  icon: {
    position: "absolute",
    color: colors.white,
    top: Platform.OS === "android" ? StatusBar.currentHeight + 20 : 20,
    fontSize: 35,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
