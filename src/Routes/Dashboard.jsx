import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../components/dashboardParts/Sidebar'
import { ApiContext } from '../contexts/ApiContext'
import ContentCard from '../components/dashboardParts/ContentCard'
import LoadingAnimation from '../components/Shared/LoadingAnimation'
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";


function Dashboard() {
    const [isSidebarOpen , setIsSidebarOpen] = useState(false)
    const [isOpen,setIsOpen] =useState(false)
   const {data,loading} = useContext(ApiContext)
   console.log(data)
    useEffect(()=>{
        const handleMouseMove = (e) => {
            if(e.clientX < 50){
                setIsSidebarOpen(true)
            } else if (e.clientX > 300) {
                setIsSidebarOpen(false);
             }
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    },[])
    
    if(loading){
        return <LoadingAnimation/>
    }
  return (
    <div className='w-full min-h-screen  bg-gray-50 mx-auto  flex flex-row relative px-4 '>
        <div className={` w-fit h-screen absolute left-0 pt-24 transition-transform duration-300 flex flex-row items-center z-20 ${isSidebarOpen? "lg:translate-x-0": "lg:-translate-x-full"} ${isOpen ? "translate-x-0" : "-translate-x-full" }`}>
           <Sidebar/>
           <div className='h-full w-fit flex items-center '>
            <button
            onClick={()=>setIsOpen(!isOpen)}
            className={` lg:hidden h-10 w-fit bg-gray-300 rounded-r-full pr-1 absolute ${isOpen?"translate-x-0" :"-translate-x-0" } `}
            >
                {
                    isOpen
                    ?<IoIosArrowDropleft/>
                    :<IoIosArrowDropright/>
                }
            </button>

        
            
           </div>
            
        </div>
        <div className='w-full h-full min-h-screen max-w-screen-xl pt-20  mx-auto'>
            <ul className='w-full  h-full flex flex-col items-center gap-y-4 pt-6 '>
                {data.map((items,index)=>(
                   
                   <ContentCard
                   key={index}
                   items={items}
                   />
                ))}

            </ul>

        </div>

      
    </div>
  )
}

export default Dashboard
