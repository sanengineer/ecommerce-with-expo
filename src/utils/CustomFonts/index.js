import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";

export default function useCustomFonts(map) {
  let [loaded, setLoaded] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    loadAsync(map)
      .then(() => setLoaded(true))
      .catch(setError);
  }, []);

  return [loaded, error];
}
