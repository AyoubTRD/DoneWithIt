import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import BodyText from "./BodyText";

export default function Card({ title, image, subtitle, style }) {
  return (
    <View style={[styles.card, ...style]}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <BodyText style={[styles.title]}>{title}</BodyText>
        <BodyText style={[styles.subtitle]}>{subtitle}</BodyText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    width: "100%",
    marginBottom: 20,
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
