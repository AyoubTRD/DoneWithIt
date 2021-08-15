import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

import sizes from "../../config/sizes";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BodyText from "../BodyText";

export default function ListTile({
  title,
  onPress,
  icon,
  iconColor = colors.primary,
}) {
  return (
    <TouchableHighlight
      underlayColor={colors.darkGrey}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.container}>
        <View style={[styles.iconContainer, { backgroundColor: iconColor }]}>
          <MaterialCommunityIcons name={icon} size={24} color={colors.white} />
        </View>
        <BodyText style={[styles.text]}>{title}</BodyText>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: sizes.listTileHeight,
    backgroundColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 43,
    height: 43,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  text: {
    textTransform: "capitalize",
  },
});
