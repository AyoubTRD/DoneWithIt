import { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";
import { navigate } from "../navigation/rootNavigation";
import routes from "../navigation/routes";

export default () => {
  const registerForPushNotifications = async () => {
    const { granted } = await Notifications.getPermissionsAsync();
    if (!granted) {
      const result = await Notifications.requestPermissionsAsync();
      if (!result.granted) return;
    }

    const token = (await Notifications.getExpoPushTokenAsync()).data;
    await expoPushTokensApi.register(token);
  };

  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener((notification) => {
      navigate(routes.ACCOUNT, { screen: routes.MESSAGES });
    });
  }, []);
};
