import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import BodyText from "./BodyText";

export default function Card({
  title,
  image,
  subtitle,
  style,
  onPress,
  thumbnailUrl,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, ...style]}>
        <Image
          style={styles.image}
          uri={image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
        />
        <View style={styles.container}>
          <BodyText style={[styles.title]} numberOfLines={2}>
            {title}
          </BodyText>
          <BodyText style={[styles.subtitle]} numberOfLines={1}>
            {subtitle}
          </BodyText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: 10,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: 220,
    width: "100%",
    resizeMode: "cover",
  },
  container: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
  subtitle: {
    color: colors.secondary,
  },
});
