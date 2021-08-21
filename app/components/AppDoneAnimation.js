import React from "react";
import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

function AppDoneAnimation({ onDone }) {
  return (
    <LottieView
      style={styles.container}
      source={require("../assets/animations/done.json")}
      autoPlay
      loop={false}
      onAnimationFinish={onDone}
      duration={1000}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

export default AppDoneAnimation;
