import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "../ErrorMessage";
import { View } from "react-native";

function AppFormPicker({
  name,
  items,
  icon,
  width,
  placeholder,
  AppPickerItemComponent,
  ...props
}) {
  const { values, setFieldValue, setFieldTouched, touched, errors } =
    useFormikContext();

  return (
    <View>
      <AppPicker
        {...props}
        onItemSelect={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        icon={icon}
        items={items}
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
        width={width}
        AppPickerItemComponent={AppPickerItemComponent}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </View>
  );
}

export default AppFormPicker;
