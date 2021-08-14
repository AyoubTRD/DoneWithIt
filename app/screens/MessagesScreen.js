import React, { useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../config/colors";
import ListItem from "../components/ListItem";
import Separator from "../components/Separator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

export default function MessagesScreen() {
  const [messages, setMessages] = useState([
    {
      text: "Is this still available?",
      sender: {
        name: "Ayoub taouarda",
        image: require("../assets/avatar.jpg"),
      },
      id: 1,
    },
    {
      text: "Are you there?",
      sender: {
        name: "Ayoub taouarda",
        image: require("../assets/avatar.jpg"),
      },
      id: 2,
    },
    {
      text: "Yeah that looks like a resonable solution indeed",
      sender: {
        name: "Ayoub taouarda",
        image: require("../assets/avatar.jpg"),
      },
      id: 3,
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const handlePress = () => {};
  const handleDelete = (id) => {
    setMessages(messages.filter((message) => message.id !== id));
  };
  const handleRefresh = () => {
    messages.pop();
    setMessages([...messages]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.messagesList}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Swipeable
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          >
            <ListItem
              title={item.sender.name}
              image={item.sender.image}
              subTitle={item.text}
              style={[styles.message]}
            />
          </Swipeable>
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.lightgrey,
    flex: 1,
  },
  message: {
    paddingHorizontal: 15,
  },
  messagesList: {
    paddingVertical: 15,
  },
});
