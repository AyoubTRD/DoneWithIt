import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import BodyText from "../BodyText";
import Screen from "../Screen";
import AppPickerItem from "./AppPickerItem";

export default function AppPicker({
  icon,
  placeholder,
  items = [],
  onItemSelect,
  onBlur = () => {},
  selectedItem,
  width = "100%",
  AppPickerItemComponent = AppPickerItem,
  numColumns = 1,
}) {
  const [modalVisisble, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.inputContainer, { width }]}>
          <View style={styles.leftContainer}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={25}
                color={colors.darkGrey}
                style={styles.icon}
              />
            )}
            {selectedItem ? (
              <BodyText>{selectedItem.label}</BodyText>
            ) : (
              <BodyText style={[styles.placeholder]}>{placeholder}</BodyText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-down"
            color={colors.darkGrey}
            size={25}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisisble}>
        <Screen>
          <View style={styles.modal}>
            <TouchableOpacity
              onPress={() => {
                onBlur();
                setModalVisible(false);
              }}
            >
              <BodyText style={[styles.textButton]}>Close</BodyText>
            </TouchableOpacity>

            <FlatList
              data={items}
              keyExtractor={(item) => item.label}
              numColumns={numColumns}
              renderItem={({ item }) => (
                <AppPickerItemComponent
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
                    onBlur();
                    onItemSelect(item);
                  }}
                />
              )}
            />
          </View>
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.lightgrey,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  leftContainer: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 10,
  },
  modal: {
    alignItems: "center",
  },
  placeholder: {
    color: colors.grey,
  },
  textButton: {
    color: colors.blue,
    fontSize: 21,
    marginVertical: 15,
  },
});
