import React from "react";
import { StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import { ListItem, ListTile } from "../components/lists";
import colors from "../config/colors";
import Separator from "../components/Separator";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";

export default function AccountScreen() {
  const navigation = useNavigation();

  return (
    <Screen backgroundColor={colors.lightgrey}>
      <View style={styles.screen}>
        <View style={styles.group}>
          <ListItem
            title="Ayoub Taouarda"
            subTitle="ayoubtrd@gmail.com"
            image={require("../assets/avatar.jpg")}
            style={[styles.profile]}
          />
        </View>
        <View style={styles.group}>
          <ListTile title="My listings" icon="format-list-bulleted" />
          <Separator />
          <ListTile
            title="My messages"
            icon="email"
            iconColor={colors.secondary}
            onPress={() => navigation.navigate(routes.MESSAGES)}
          />
        </View>
        <View style={styles.group}>
          <ListTile title="Log out" icon="logout" iconColor={colors.yellow} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 30,
  },
  profile: {
    paddingHorizontal: 15,
    backgroundColor: colors.white,
  },
  screen: {
    paddingVertical: 20,
    flex: 1,
  },
});
