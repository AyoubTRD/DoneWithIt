import React, { useEffect, useState } from "react";
import { Animated, Easing } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../config/colors";

function AppProgressBar({ progress, onDone }) {
  const [progressValue, setProgressValue] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progressValue, {
      toValue: progress,
      duration: 800,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
    setProgressValue(new Animated.Value(progress));
  }, [progress]);

  return (
    <LottieView
      source={require("../assets/animations/progress.json")}
      progress={progressValue}
      style={{ backgroundColor: colors.white }}
      onAnimationFinish={onDone}
    />
  );
}

export default AppProgressBar;
