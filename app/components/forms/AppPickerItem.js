import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import BodyText from "../BodyText";

export default function AppPickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <BodyText style={[styles.text]}>{item.label}</BodyText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});
