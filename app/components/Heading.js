import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

export default function Heading({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colors.black,
  },
});
