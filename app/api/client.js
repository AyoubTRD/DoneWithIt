import api from "apisauce";

import cache from "../utility/cache";
import authStorage from "../utility/authStorage";

const client = api.create({
  baseURL: "http://192.168.8.102:9000/api",
});

client.addAsyncRequestTransform(async (request) => {
  const token = await authStorage.getToken();
  request.headers["x-auth-token"] = token;
});

const get = client.get;

client.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return { ok: true, data };
};

export default client;
