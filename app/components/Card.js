import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

import colors from "../config/colors";
import BodyText from "./BodyText";

export default function Card({ title, source, price }) {
  return (
    <View style={styles.card}>
      <Image source={source} style={styles.image} />
      <View style={styles.container}>
        <BodyText style={[styles.title]}>{title}</BodyText>
        <BodyText style={[styles.price]}>{price}</BodyText>
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
  price: {
    color: colors.secondary,
  },
});
