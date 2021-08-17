import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";

const initialData = [
  {
    title: "Brand new white cap",
    price: "$100",
    image: require("../assets/cap.jpg"),
    id: 1,
  },
  {
    title: "Brand new white cap",
    price: "$100",
    image: require("../assets/cap.jpg"),
    id: 2,
  },
];

export default function ListingsScreen() {
  const [listings, setListings] = useState(initialData);

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
