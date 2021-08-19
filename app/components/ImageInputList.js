import React, { useRef } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({
  imageUris = [],
  onImageDelete,
  onImageAdd,
  maxNumberOfImages,
  ...props
}) {
  const scrollView = useRef();

  return (
    <ScrollView
      style={styles.container}
      horizontal
      ref={(ref) => {
        this.scrollView = ref;
      }}
      onContentSizeChange={() => {
        this.scrollView.scrollToEnd();
      }}
    >
      {imageUris &&
        imageUris.map((image, i) => (
          <ImageInput
            onChangeImage={() => onImageDelete(image)}
            imageUri={image}
            key={i.toString()}
          />
        ))}
      {imageUris.length < maxNumberOfImages && (
        <ImageInput onChangeImage={onImageAdd} {...props} />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ImageInputList;
