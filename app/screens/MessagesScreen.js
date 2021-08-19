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
import ListItem from "../components/lists/ListItem";
import Separator from "../components/Separator";
import ListItemDeleteAction from "../components/lists/ListItemDeleteAction";
import Screen from "../components/Screen";

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
    <Screen>
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  message: {
    paddingHorizontal: 15,
  },
});
