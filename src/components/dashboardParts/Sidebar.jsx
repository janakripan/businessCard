import { Dashboard } from "@mui/icons-material";
import React, { useContext } from "react";
import { dashboardLinks } from "../../constants/dashboardLinks";
import { NavLink, useNavigate } from "react-router";
import { sidebarContext } from "../../contexts/DashboardStyles";
import { useAuth } from "../../contexts/AuthContext";

function Sidebar() {
  const { isOpen, setIsOpen } = useContext(sidebarContext);
  const {logout} = useAuth()
  const navigate = useNavigate();

  const handleClick = () =>{
    logout();
    navigate("/authentication/authhome/login", { replace: true }); 
  }

  return (
    <div
      className={` w-fit h-full absolute left-0 pt-24 transition-transform duration-300 flex flex-row items-center z-20 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        className={`w-[350px] lg:w-[300px] bg-slate-400 h-full shadow-xl backdrop-blur-xl pt-6 transition-transform duration-300 flex flex-col`}
      >
        <h2 className="w-full px-6 text-xl font-poppins font-semibold text-gray-800 my-4">
          <Dashboard style={{ color: "blue", fontSize: "30px" }} /> Dashboard
        </h2>
        <ul className=" gap-y-1 flex flex-col">
          {dashboardLinks.map((items) => (
            <li
              key={items.id}
              onClick={() => setIsOpen(false)}
              className="w-full h-14  flex items-center "
            >
              <NavLink
                to={items.path}
                className={({ isActive }) => `
              w-full h-full flex items-center  ${
                isActive ? "bg-gray-200  rounded-lg" : "hover:bg-gray-200 "
              }`}
              >
                <div className="text-2xl text-violet-400 font-semibold  flex gap-1 px-4">
                  <items.icon />
                </div>
                <p className="text-lg ">{items.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="w-full h-fit mt-auto mb-6 p-8">
          
          <button 
          onClick={handleClick}
          className="w-full py-4 rounded-full bg-blue-500 text-white text-center mt-20 mx-auto hover:scale-105 active:scale-95 active:bg-blue-400 transition-all duration-300 ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
