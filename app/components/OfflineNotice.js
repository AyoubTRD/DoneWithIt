import React from "react";
import { StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import BodyText from "./BodyText";
import colors from "../config/colors";

function OfflineNotice({}) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <BodyText style={[styles.text]}>No Internet Connection</BodyText>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: Constants.statusBarHeight,
    height: 45,
    width: "100%",
    backgroundColor: colors.red,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
