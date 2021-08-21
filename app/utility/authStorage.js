import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "token";

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("getToken", error);
  }
};

const getUser = async () => {
  const authToken = await getToken();
  if (authToken) return jwtDecode(authToken);
};

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("storeToken", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("removeToken", error);
  }
};

export default {
  getUser,
  getToken,
  storeToken,
  removeToken,
};
