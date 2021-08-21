import { useContext } from "react";
import jwtDecode from "jwt-decode";

import AuthContext from "../contexts/AuthContext";
import authStorage from "../utility/authStorage";

export default () => {
  const { user, setUser } = useContext(AuthContext);

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = (token) => {
    const user = jwtDecode(token);
    setUser(user);
    authStorage.storeToken(token);
  };

  return { user, setUser, logIn, logOut };
};
