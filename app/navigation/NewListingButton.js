import React from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={50}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 90,
    backgroundColor: colors.primary,
    bottom: 30,
    borderWidth: 10,
    borderColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewListingButton;
