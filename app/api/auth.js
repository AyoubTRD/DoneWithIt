import client from "./client";

const login = (email, password) => client.post("/auth", { email, password });

const register = (email, name, password) =>
  client.post("/users", { email, password, name });

export default {
  login,
  register,
};
