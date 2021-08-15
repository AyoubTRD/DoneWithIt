import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import sizes from "../config/sizes";

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
    height: sizes.buttonHeight,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 17.5,
    textTransform: "uppercase",
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
});
