import React from "react";
import { StyleSheet, View } from "react-native";

import ErrorMessage from "../ErrorMessage";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, width, ...props }) {
  const { setFieldValue, setFieldTouched, errors, touched, values } =
    useFormikContext();

  return (
    <View>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        width={width}
        value={values[name]}
        {...props}
      />

      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </View>
  );
}

const styles = StyleSheet.create({});
