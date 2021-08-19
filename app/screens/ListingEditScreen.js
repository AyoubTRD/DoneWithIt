import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as Yup from "yup";
import * as Location from "expo-location";

import { AppForm, AppFormField, AppSubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/forms/CategoryPickerItem";
import FormImageInputList from "../components/forms/FormImageInputList";
import Screen from "../components/Screen";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import useLocation from "../hooks/useLocation";

const validationSchema = Yup.object().shape({
  category: Yup.object().required().nullable().label("Category"),
  title: Yup.string().required().max(64).label("Title"),
  description: Yup.string().required().max(1000).label("Description"),
  price: Yup.number().required().min(0).max(10000).label("Price"),
  images: Yup.array().required().min(1, "Please select at least one image"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const location = useLocation();

  return (
    <Screen>
      <View style={styles.screen}>
        <AppForm
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(location)}
          validationSchema={validationSchema}
        >
          <FormImageInputList name="images" maxNumberOfImages={3} />
          <AppFormField name="title" placeholder="Title" autoCorrect />
          <AppFormField
            name="price"
            placeholder="Price"
            width={150}
            keyboardType="numeric"
          />
          <AppFormPicker
            name="category"
            items={categories}
            placeholder="Category"
            width={"50%"}
            AppPickerItemComponent={CategoryPickerItem}
            numColumns={3}
          />
          <AppFormField
            name="description"
            placeholder="Description"
            autoCorrect
            multiline
            numberOfLines={3}
          />
          <AppSubmitButton>Submit</AppSubmitButton>
        </AppForm>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
  fieldsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ListingEditScreen;
