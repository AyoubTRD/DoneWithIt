import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

export default function ButtonBase({
  children,
  onPress,
  color = "primary",
  style = [],
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors[color],
        },
        ...style,
      ]}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
