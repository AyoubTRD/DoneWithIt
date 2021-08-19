import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        accuracy: Location.LocationAccuracy.High,
      });
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log("Location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
