import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Image,
} from "react-native";

import BodyText from "../components/BodyText";
import ButtonBase from "../components/ButtonBase";
import Heading from "../components/Heading";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";

export default function ListingScreen({ title, price, image, seller }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Heading>{title}</Heading>
        <BodyText style={[styles.price]}>{price}</BodyText>
        <ListItem
          style={[styles.sellerContainer]}
          title={seller.name}
          subTitle={`${seller.numberOfListings} Listing(s)`}
          image={seller.image}
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
