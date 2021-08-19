import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import defaultStyles from "../config/defaultStyles";
import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage, onBlur }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (granted) return;
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted) {
      alert("This app requires access to photos.");
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const handlePress = () => {
    if (!imageUri) selectImage();
    else {
      Alert.alert(
        "Delete image",
        "Are you sure you want to delete this image?",
        [
          {
            text: "Yes",
            onPress() {
              onChangeImage(null);
            },
          },
          {
            text: "No",
          },
        ]
      );
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      quality: 0.5,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
    onBlur();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={defaultStyles.imageInput}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <MaterialCommunityIcons name="camera" style={styles.icon} />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: colors.darkGrey,
    fontSize: 40,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
