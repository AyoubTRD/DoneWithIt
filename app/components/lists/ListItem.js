import React from "react";
import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import sizes from "../../config/sizes";
import BodyText from "../BodyText";

export default function ListItem({
  title,
  subTitle,
  image,
  onPress,
  icon = "chevron-right",
  style = [],
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.8}
      underlayColor={colors.grey}
      onPress={onPress}
    >
      <View style={[styles.container, ...style]}>
        <Image source={image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <BodyText style={[styles.title]} numberOfLines={1}>
            {title}
          </BodyText>
          <BodyText style={[styles.subTitle]} numberOfLines={2}>
            {subTitle}
          </BodyText>
        </View>
        {icon && <MaterialCommunityIcons name={icon} style={styles.icon} />}
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: sizes.listItemHeight,
  },
  detailsContainer: {
    height: "80%",
    flex: 1,
    justifyContent: "space-evenly",
  },
  image: {
    borderRadius: 100,
    height: sizes.listItemImageSize,
    width: sizes.listItemImageSize,
    marginRight: 15,
  },
  subTitle: {
    color: colors.darkGrey,
    fontSize: 16,
  },
  title: {
    fontWeight: "500",
  },
  icon: {
    alignSelf: "center",
    fontSize: 25,
    marginLeft: 5,
    color: colors.black,
  },
});
