import React, { useState } from "react";
import DoneIcon from '@mui/icons-material/Done';


const SharedButton = () =>{

    const [selected , setSelected] = useState(false)

   const handleclick = ( )=>{
    setSelected(prevState=> !prevState)
   }

    return (
        <div className={`w-full  h-fit border-2 my-4 py-2 rounded-xl ${
            selected
                    ? " border-[#F66F4D] "
                    : "border-[#747474]"
        }`}>
            <button className={`w-full h-full flex items-center justify-center`}
            onClick={handleclick}>
                <span className={`${selected ? "text-[#F66F4D]" : "text-[#747474]"}`}>
                    {selected ? "selected " : "select" }{selected ? <DoneIcon/> : ""}
                </span>
                

            </button>


        </div>
    )
}

export default SharedButton;
