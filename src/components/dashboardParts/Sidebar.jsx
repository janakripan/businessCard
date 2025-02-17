import { Dashboard } from '@mui/icons-material'
import React from 'react'

function Sidebar() {
  return (
    <div className={`w-[350px] lg:w-[300px]  h-full shadow-xl backdrop-blur-xl pt-6 transition-transform duration-300`}>
        <h2 className='w-full px-6 text-xl font-poppins font-semibold text-gray-800 my-4'>
            <Dashboard style={{color: "blue" , fontSize: "30px"}}/> Dashboard
        </h2>

    </div>
  )
}

export default Sidebar
