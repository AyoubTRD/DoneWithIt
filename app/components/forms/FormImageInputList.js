import { useFormikContext } from "formik";
import React from "react";
import { StyleSheet, View } from "react-native";
import ErrorMessage from "../ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImageInputList({ name, maxNumberOfImages = 10 }) {
  const { values, errors, touched, setFieldValue, setFieldTouched } =
    useFormikContext();

  const handleAdd = (image) => {
    setFieldValue(name, values[name] ? [...values[name], image] : [image]);
  };

  const handleDelete = (image) => {
    setFieldValue(
      name,
      values[name].filter((value) => value !== image)
    );
  };

  return (
    <View style={styles.container}>
      <ImageInputList
        imageUris={values[name]}
        onImageAdd={handleAdd}
        onImageDelete={handleDelete}
        maxNumberOfImages={maxNumberOfImages}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default FormImageInputList;
