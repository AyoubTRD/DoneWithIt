import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";
import sizes from "../../config/sizes";

export default function AppTextInput({ icon, style = [], ...props }) {
  return (
    <View style={[styles.inputContainer, ...style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={23}
          color={colors.darkGrey}
          style={styles.icon}
        />
      )}
      <TextInput style={[styles.input, defaultStyles.text]} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    height: sizes.buttonHeight,
    backgroundColor: colors.lightgrey,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  input: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});
