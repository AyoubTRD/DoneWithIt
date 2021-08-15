import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "./AppPicker";
import ErrorMessage from "../ErrorMessage";

function AppFormPicker({ name, items, icon, placeholder }) {
  const { values, setFieldValue, setFieldTouched, touched, errors } =
    useFormikContext();

  return (
    <>
      <AppPicker
        onItemSelect={(item) => setFieldValue(name, item.value)}
        selectedItem={items.find((item) => item.value === values[name])}
        icon={icon}
        items={items}
        placeholder={placeholder}
        onBlur={() => setFieldTouched(name)}
      />
      <ErrorMessage visible={touched[name]}>{errors[name]}</ErrorMessage>
    </>
  );
}

export default AppFormPicker;
