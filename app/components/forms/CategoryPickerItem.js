import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import BodyText from "../BodyText";

function CategoryPickerItem({
  item: { backgroundColor, label, icon },
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.item}>
        <View style={[styles.iconContainer, { backgroundColor }]}>
          <MaterialCommunityIcons name={icon} size={38} color={colors.white} />
        </View>
        <BodyText style={[styles.text]}>{label}</BodyText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "33.33%",
    marginVertical: 20,
  },
  iconContainer: {
    borderRadius: 100,
    marginBottom: 5,
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    width: 90,
  },
});

export default CategoryPickerItem;
