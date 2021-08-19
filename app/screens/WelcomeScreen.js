import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Platform,
} from "react-native";

import ButtonBase from "../components/ButtonBase";
import colors from "../config/colors";
import routes from "../navigation/routes";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/background.jpg")}
        style={styles.background}
        blurRadius={2}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <ButtonBase onPress={() => navigation.navigate(routes.LOGIN)}>
            Login
          </ButtonBase>
          <ButtonBase
            color="secondary"
            onPress={() => navigation.navigate(routes.REGISTER)}
          >
            Register
          </ButtonBase>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  background: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 100,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
  },
  tagline: {
    fontSize: 30,
    textTransform: "capitalize",
    fontWeight: Platform.OS === "android" ? "bold" : "600",
    color: colors.black,
  },
});
