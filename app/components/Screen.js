import React from "react";
import { SafeAreaView, StyleSheet, Platform, StatusBar } from "react-native";

import colors from "../config/colors";

export default function Screen({ children, backgroundColor = colors.white }) {
  return (
    <SafeAreaView
      style={[
        styles.screen,
        {
          backgroundColor,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
