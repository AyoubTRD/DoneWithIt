import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from "../screens/ListingsScreen";
import ListingScreen from "../screens/ListingScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function ListingsNavigator({}) {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: "modal" }}
    >
      <Stack.Screen name={routes.LISTINGS} component={ListingsScreen} />
      <Stack.Screen name={routes.LISTING_DETAILS} component={ListingScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ListingsNavigator;
