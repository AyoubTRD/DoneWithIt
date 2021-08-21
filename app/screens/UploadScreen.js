import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import * as Progress from "react-native-progress";
import AppDoneAnimation from "../components/AppDoneAnimation";
import colors from "../config/colors";

function UploadScreen({ progress, done, onDone }) {
  return (
    <Modal>
      <View style={styles.container}>
        {done ? (
          <AppDoneAnimation onDone={onDone} />
        ) : (
          <Progress.Bar
            progress={progress}
            color={colors.primary}
            width={200}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UploadScreen;
