import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

import colors from "../config/colors";

export default function Screen({ children }) {
  return <SafeAreaView style={styles.screen}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightgrey,
    flex: 1,
  },
});
