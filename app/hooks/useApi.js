import { useState } from "react";

export default (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setError(false);
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    setData(response.data);

    setError(!response.ok);
    return response;
  };

  return { request, data, error, loading };
};
