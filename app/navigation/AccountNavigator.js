import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();

function AccountNavigator({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        presentation: "card",
      }}
    >
      <Stack.Screen
        name={routes.ACCOUNT_HOME}
        component={AccountScreen}
        options={{ headerTitle: "Account" }}
      />
      <Stack.Screen
        name={routes.MESSAGES}
        component={MessagesScreen}
        options={{ headerTitle: "Messages" }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AccountNavigator;
