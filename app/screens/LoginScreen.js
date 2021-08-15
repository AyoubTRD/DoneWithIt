import React from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { AppFormField, AppSubmitButton, AppForm } from "../components/forms";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(28).label("Password"),
});

export default function LoginScreen() {
  return (
    <Screen>
      <View style={styles.screen}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormField
            name="email"
            icon="email"
            placeholder="Email"
            autoCompleteType="email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <AppFormField
            name="password"
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            autoCompleteType="password"
            secureTextEntry
          />
          <AppSubmitButton>Login</AppSubmitButton>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    marginVertical: 30,
    alignSelf: "center",
  },
  errorMessage: {
    color: colors.red,
  },
});
