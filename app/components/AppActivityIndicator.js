import React from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";
import colors from "../config/colors";

function AppActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        loop
        autoPlay
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.white,
    opacity: 0.8,
    zIndex: 1,
  },
});

export default AppActivityIndicator;
