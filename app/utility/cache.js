import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const isExpired = (item) => {
  const now = Date.now();
  const diff = moment(now).diff(moment(item.timestamp), "minutes");
  return diff > 5;
};

const store = async (key, data) => {
  try {
    const item = {
      data,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

const get = async (key) => {
  try {
    const itemString = await AsyncStorage.getItem(key);
    const item = JSON.parse(itemString);
    if (!item) return null;

    if (isExpired(item)) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return item.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  store,
  get,
};
