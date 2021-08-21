import React from "react";

const navigation = React.createRef();

const navigate = (route, params) => {
  return navigation.current?.navigate(route, params);
};

export { navigation, navigate };
