import React from "react";
import { StyleSheet, View } from "react-native";

import ErrorMessage from "../ErrorMessage";
import AppTextInput from "./AppTextInput";
import { useFormikContext } from "formik";

export default function AppFormField({ name, ...props }) {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <View>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...props}
      />

      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </View>
  );
}

const styles = StyleSheet.create({});
