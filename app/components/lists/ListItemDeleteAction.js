import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import sizes from "../../config/sizes";

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="trash-can" style={styles.icon} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: sizes.listItemHeight,
    width: sizes.listItemHeight,
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 20,
    color: colors.white,
  },
});
