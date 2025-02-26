import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ApiContext = createContext();

const ApiProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL =
    "https://digiprofile-djh7gkgphhbgbmed.eastus-01.azurewebsites.net/api/getbusinesscard";

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(API_URL);
        setData(response.data.data);  // Ensure response structure is correct
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
  
    // ✅ Fetch data on mount
    useEffect(() => {
      fetchData();
    }, []);
  
  
  return (
    <ApiContext.Provider value={{ data, loading ,fetchData }}>
      {children}
    </ApiContext.Provider>
  );
};
export { ApiContext, ApiProvider };
