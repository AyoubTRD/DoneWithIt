import React from "react";
import { Platform, StyleSheet, Text } from "react-native";
import defaultStyles from "../config/defaultStyles";

export default function BodyText({ children, style = [], ...props }) {
  return (
    <Text {...props} style={[defaultStyles.text, ...style]}>
      {children}
    </Text>
  );
}
