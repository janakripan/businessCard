import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL =
    "https://digiprofile-djh7gkgphhbgbmed.eastus-01.azurewebsites.net/api/getbusinesscard";

  useEffect(() => {
    setLoading(true);
    axios
      .get(API_URL)
      .then((response) => {
        setData(response.data.data), setLoading(false);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setLoading(false);
      });
  }, []);
  console.log(loading);
  return (
    <ApiContext.Provider value={{ data, loading }}>
      {children}
    </ApiContext.Provider>
  );
};
export { ApiContext, ApiProvider };
