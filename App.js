import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BodyText from "./app/components/BodyText";
import ButtonBase from "./app/components/ButtonBase";
import Card from "./app/components/Card";
import colors from "./app/config/colors";
import ListingScreen from "./app/screens/ListingScreen";

export default function App() {
  return (
    <ListingScreen
      title="Brand new white cap"
      price="$90"
      image={require("./app/assets/cap.jpg")}
      seller={{
        name: "Ayoub Taouarda",
        image: require("./app/assets/avatar.jpg"),
        numberOfListings: 3,
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
    backgroundColor: colors.lightgrey,
  },
});
