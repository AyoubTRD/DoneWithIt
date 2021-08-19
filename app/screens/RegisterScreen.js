import React from "react";
import { StyleSheet, View } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).max(28).label("Password"),
  name: Yup.string().required().label("Name"),
});

function RegisterScreen({}) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppForm
          initialValues={{ email: "", password: "", name: "" }}
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
          <AppSubmitButton>Register</AppSubmitButton>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default RegisterScreen;
