import Bugsnag from "@bugsnag/expo";
Bugsnag.start();

import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import theme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/contexts/AuthContext";
import authStorage from "./app/utility/authStorage";
import { navigation } from "./app/navigation/rootNavigation";

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    Bugsnag.notify(new Error("The most beautiful Error"));
  }, []);

  if (!isReady)
    return (
      <AppLoading
        startAsync={async () => setUser(await authStorage.getUser())}
        onError={(error) => console.log(error)}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer theme={theme} ref={navigation}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <OfflineNotice />
    </AuthContext.Provider>
  );
}
