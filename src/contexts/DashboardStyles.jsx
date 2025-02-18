import { createContext, useState } from "react";

export const sidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleclick=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <sidebarContext.Provider value={{ isOpen, setIsOpen,handleclick}}>
      {children}
    </sidebarContext.Provider>
  );
};

