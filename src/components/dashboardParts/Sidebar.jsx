import { Dashboard } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { dashboardLinks } from "../../constants/dashboardLinks";
import { Link, NavLink } from "react-router";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

//   useEffect(()=>{
//     const handleMouseMove = (e) => {
//         if(e.clientX < 50){
//             setIsSidebarOpen(true)
//         } else if (e.clientX > 300) {
//             setIsSidebarOpen(false);
//          }
//     }
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
// },[])

  return (
    <div
      className={` w-fit h-screen absolute left-0 pt-24 transition-transform duration-300 flex flex-row items-center z-20 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div
        className={`w-[350px] lg:w-[300px]  h-full shadow-xl backdrop-blur-xl pt-6 transition-transform duration-300`}
      >
        <h2 className="w-full px-6 text-xl font-poppins font-semibold text-gray-800 my-4">
          <Dashboard style={{ color: "blue", fontSize: "30px" }} /> Dashboard
        </h2>
        <ul className=" gap-y-1 flex flex-col">
          {dashboardLinks.map((items) => (
            <li
              key={items.id}
              onClick={()=>setIsOpen(false)}
              className="w-full h-14  flex items-center "
            >
              <NavLink 
              to={items.path} 
              className={({ isActive }) =>`
              w-full h-full flex items-center  ${
                isActive ? "bg-gray-200  rounded-lg" : "hover:bg-gray-200 "
              }`}>
                <div className="text-2xl text-violet-400 font-semibold  flex gap-1 px-4">
                  <items.icon  />
                  
                </div>
                <p className="text-lg ">{items.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-full w-fit flex items-center ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={` h-10 w-fit bg-gray-300 rounded-r-full pr-1 absolute ${
            isOpen ? "translate-x-0" : "-translate-x-0"
          } `}
        >
          {isOpen ? <IoIosArrowDropleft /> : <IoIosArrowDropright />}
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
