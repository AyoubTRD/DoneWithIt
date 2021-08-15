import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";
import BodyText from "./BodyText";
import Screen from "./Screen";
import AppPickerItem from "./AppPickerItem";

export default function AppPicker({
  icon,
  placeholder,
  items = [],
  onItemSelect,
  selectedItem,
}) {
  const [modalVisisble, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.inputContainer}>
          <View style={styles.leftContainer}>
            {icon && (
              <MaterialCommunityIcons
                name={icon}
                size={25}
                color={colors.darkGrey}
                style={styles.icon}
              />
            )}
            <BodyText>
              {selectedItem ? selectedItem.label : placeholder}
            </BodyText>
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
            <Button title="Close" onPress={() => setModalVisible(false)} />

            <FlatList
              data={items}
              keyExtractor={(item) => item.label}
              renderItem={({ item }) => (
                <AppPickerItem
                  item={item}
                  onPress={() => {
                    setModalVisible(false);
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
});
