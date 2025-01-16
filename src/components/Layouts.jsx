import React from 'react'
import { layouts } from '../constants/layouts'
import SharedButton from '../shared/SharedButton'

function Layouts() {
  return (
    <div className='w-full mt-20'>

        <h2 className='py-16 text-gray-900 font-bold font-public text-5xl flex justify-center'>
        Select Layout
        </h2>
        <div className='w-full h-fit  '>
           <ul className=' flex flex-row '>
           {layouts.map((item , index)=>(
            <li key={index} className=' w-full h-fit flex flex-col items-center px-1'>
                <img src={item.image} alt="" />
                <SharedButton/>

            </li>
            ))}
           </ul>

        </div>
      
    </div>
  )
}

export default Layouts
