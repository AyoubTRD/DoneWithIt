import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import ButtonBase from "../components/ButtonBase";
import BodyText from "../components/BodyText";
import AppActivityIndicator from "../components/AppActivityIndicator";
import useApi from "../hooks/useApi";

export default function ListingsScreen() {
  const { data, request, error, loading } = useApi(listingsApi.getListings);

  useEffect(() => {
    request();
  }, []);

  const navigation = useNavigation();

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen>
        <View style={styles.screen}>
          {error && (
            <>
              <BodyText>Couldn't load the listings</BodyText>
              <ButtonBase onPress={request}>Retry</ButtonBase>
            </>
          )}
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                style={[styles.card]}
                title={item.title}
                image={item.images[0].url}
                thumbnailUrl={item.images[0].thumbnailUrl}
                subtitle={"$" + item.price}
                onPress={() => {
                  navigation.navigate(routes.LISTING_DETAILS, {
                    listing: item,
                  });
                }}
              />
            )}
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
  screen: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: colors.lightgrey,
    paddingTop: 15,
  },
});
