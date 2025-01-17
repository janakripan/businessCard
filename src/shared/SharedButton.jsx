import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';


const SharedButton = ({onButtonClick,item, isActive}) =>{


 

    return (
        <div className={`w-full  h-fit border-2 my-4 py-2 rounded-xl 
         ${
        isActive
                ? " border-[#F66F4D] "
                : "border-[#747474]"
    }
        `}>
            <button className={`w-full h-full flex items-center justify-center`}
            onClick={()=>onButtonClick(item.id)}>
                <span className={`${isActive ? "text-[#F66F4D]" : "text-[#747474]"}`}>
                    {isActive ? "selected " : "select" }{isActive ? <DoneIcon/> : ""}
                </span>
                

            </button>


        </div>
    )
    //
}

export default SharedButton;
