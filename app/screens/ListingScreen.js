import { useRoute } from "@react-navigation/native";
import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Image } from "react-native-expo-image-cache";

import BodyText from "../components/BodyText";
import ButtonBase from "../components/ButtonBase";
import Heading from "../components/Heading";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

export default function ListingScreen({}) {
  const {
    params: {
      listing: { title, price, images },
    },
  } = useRoute();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        uri={images[0].url}
        preview={{ uri: images[0].thumbnailUrl }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <Heading>{title}</Heading>
        <BodyText style={[styles.price]}>{price}</BodyText>
        <ListItem
          style={[styles.sellerContainer]}
          title="Ayoub Taouarda"
          subTitle="3 Listings(s)"
          image={require("../assets/avatar.jpg")}
        />
        <View style={styles.messageContainer}>
          <BodyText style={[styles.messageText]}>
            Is this still available?
          </BodyText>
        </View>
        <ButtonBase>Contact seller</ButtonBase>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    height: 270,
    width: "100%",
  },
  messageContainer: {
    borderRadius: 25,
    backgroundColor: colors.lightgrey,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  messageText: {
    color: colors.black,
  },
  price: {
    color: colors.primary,
    marginTop: 10,
    fontSize: 20,
  },
  sellerContainer: {
    marginVertical: 40,
  },
});
