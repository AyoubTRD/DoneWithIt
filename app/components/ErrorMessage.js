import React from "react";
import { StyleSheet } from "react-native";

import BodyText from "./BodyText";
import colors from "../config/colors";

export default function ErrorMessage({ visible, children }) {
  if (!(visible && children)) return null;
  return <BodyText style={[styles.text]}>{children}</BodyText>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.red,
  },
});
