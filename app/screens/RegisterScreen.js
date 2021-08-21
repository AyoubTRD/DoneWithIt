import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import ErrorMessage from "../components/ErrorMessage";
import authApi from "../api/auth";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(28).label("Password"),
  name: Yup.string().required().label("Name"),
});

function RegisterScreen({}) {
  const { logIn } = useAuth();
  const registerApi = useApi(authApi.register);
  const logInApi = useApi(authApi.login);

  const handleSubmit = async ({ email, name, password }) => {
    const response = await registerApi.request(email, name, password);
    if (response.ok) {
      const loginResponse = await logInApi.request(email, password);
      if (loginResponse.ok) {
        logIn(loginResponse.data);
      }
    }
  };

  return (
    <>
      <AppActivityIndicator visible={registerApi.loading || logInApi.loading} />
      <Screen>
        <View style={styles.container}>
          <AppForm
            initialValues={{ email: "", password: "", name: "" }}
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
            <AppFormField name="name" icon="account" placeholder="Name" />

            <AppFormField
              name="password"
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="Password"
              autoCompleteType="password"
              secureTextEntry
            />
            <AppSubmitButton loading={registerApi.loading || logInApi.loading}>
              Register
            </AppSubmitButton>
            <ErrorMessage visible={registerApi.error}>
              This email has already been used
            </ErrorMessage>
          </AppForm>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default RegisterScreen;
