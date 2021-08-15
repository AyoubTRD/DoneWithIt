import React from "react";
import * as Yup from "yup";

import { AppForm } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  category: Yup.number().required().label("Category"),
});

function ListingEditScreen(props) {
  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: 0, category: null }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormPicker
          name="category"
          items={[{ value: 0, label: "cameras" }]}
          placeholder="Category"
        />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;
