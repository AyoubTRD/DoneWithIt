import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";

const initialData = [
  {
    title: "Brand new white cap",
    price: "$100",
    image: require("../assets/cap.jpg"),
    seller: {
      name: "Ayoub Taouarda",
      image: require("../assets/avatar.jpg"),
      numberOfListings: 3,
    },
    id: 1,
  },
  {
    title: "Brand new white cap",
    price: "$100",
    image: require("../assets/cap.jpg"),
    seller: {
      name: "Ayoub Taouarda",
      image: require("../assets/avatar.jpg"),
      numberOfListings: 3,
    },
    id: 2,
  },
];

export default function ListingsScreen() {
  const [listings, setListings] = useState(initialData);
  const navigation = useNavigation();

  return (
    <Screen>
      <View style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              style={[styles.card]}
              title={item.title}
              image={item.image}
              subtitle={item.price}
              onPress={() => {
                navigation.navigate(routes.LISTING_DETAILS, { listing: item });
              }}
            />
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 15,
  },
  screen: {
    paddingHorizontal: 25,
    flex: 1,
    backgroundColor: colors.lightgrey,
  },
});
