import React from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import routes from "./routes";
import ListingsNavigator from "./ListingsNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();

function AppNavigator({}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name={routes.FEED}
        component={ListingsNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={{
          tabBarButton: NewListingButton,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
