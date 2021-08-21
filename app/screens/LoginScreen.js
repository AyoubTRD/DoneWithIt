import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";
import * as Yup from "yup";
import jwtDecode from "jwt-decode";

import Screen from "../components/Screen";
import colors from "../config/colors";
import { AppFormField, AppSubmitButton, AppForm } from "../components/forms";
import useApi from "../hooks/useApi";
import authApi from "../api/auth";
import ErrorMessage from "../components/ErrorMessage";
import AuthContext from "../contexts/AuthContext";
import authStorage from "../utility/authStorage";
import useAuth from "../hooks/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(28).label("Password"),
});

export default function LoginScreen() {
  const { logIn } = useAuth();
  const { request, error, loading } = useApi(authApi.login);

  const handleSubmit = async ({ email, password }) => {
    const response = await request(email, password);
    if (response.ok) {
      logIn(response.data);
    }
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen>
        <View style={styles.screen}>
          <Image
            source={require("../assets/logo-red.png")}
            style={styles.logo}
          />
          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
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
            <AppSubmitButton loading={loading}>Login</AppSubmitButton>
            <ErrorMessage visible={error}>
              Invalid email or password
            </ErrorMessage>
          </AppForm>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingHorizontal: 15,
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
