import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import AppTextInput from "../components/AppTextInput";
import ButtonBase from "../components/ButtonBase";

import Screen from "../components/Screen";

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen>
      <View style={styles.screen}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppTextInput
          style={[styles.input]}
          icon="email"
          placeholder="email"
          autoCompleteType="email"
          keyboardType="email-address"
          autoCapitalize={false}
          autoCorrect={false}
          onChange={setEmail}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.input]}
          icon="lock"
          placeholder="password"
          autoCompleteType="password"
          secureTextEntry
          onChange={setPassword}
        />
        <ButtonBase onPress={() => {}}>Login</ButtonBase>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    marginVertical: 8,
  },
  logo: {
    width: 80,
    height: 80,
    marginVertical: 30,
  },
});
