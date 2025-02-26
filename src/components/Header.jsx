import React, { useContext } from "react";
import { useLocation } from "react-router";
import { TbMenuDeep } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { sidebarContext } from "../contexts/DashboardStyles";

function Header() {
  const {handleclick,isOpen} = useContext(sidebarContext)
 
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");
  return (
    <div className="w-full h-24 flex items-center backdrop-blur-lg shadow-lg  absolute top-0 z-30 pt-4">
      <div className="w-full max-w-screen-xl  h-fit flex justify-between items-center mx-auto px-2">
        <div className="flex flex-row items-center gap-x-2 ">
          {isDashboard&&(
            
              <button 
              onClick={(e)=>handleclick(e)}
              className={`text-2xl  transition-all duration-300  ${isOpen? "rotate-180" : "rotate-0"} `}
               >
                {
                  isOpen
                  ?<IoMdClose/>
                  :<TbMenuDeep/>
                }
              </button>

           
          )}
          <div className="flex items-center justify-center  rounded-full bg-[#FF7B29] text-white text-base font-inter w-9 aspect-square font-bold ">
            ST
          </div>
          <h5 className="text-gray-900 text-base md:text-xl lg:text-2xl font-bold">
            Sacrosys Technology's
          </h5>
        </div>
        <div className=" w-fit h-fit">
          <button className=" bg-[#31C3E0] scale-75 md:scale-100  px-6 py-3 text-white text-base font-inter font-medium rounded-lg active:bg-[#89DCED] active:scale-90 md:hover:scale-105 transition-all duration-300 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
