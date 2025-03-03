import { createContext, useContext, useEffect, useState } from "react";


const AuthContext = createContext()

export const AuthProvider = ({children})=> {
    const storedUser = JSON.parse(localStorage.getItem("user")) || null;
    const [user , setUser] = useState(storedUser);

    useEffect(() => {
        if (user) {
          console.log(user)
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          localStorage.removeItem("user");
        }
      }, [user]);
    
     
      const login = (userData) => {
        setUser(userData);
      };
    
      
      const logout = () => {
        setUser(null);
      };

      return (
        <AuthContext.Provider value={{ user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );

}

export const useAuth = () => useContext(AuthContext);