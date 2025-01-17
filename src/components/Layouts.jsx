import React, { useState } from 'react'
import { layouts } from '../constants/layouts'
import SharedButton from '../shared/SharedButton'

function Layouts() {
  const [selected , setSelected] = useState(1)


  const handleButtonclick = (id) =>{
    setSelected( id )
  }


  return (
    <div className='w-full mt-20 px-4'>

        <h2 className='py-16 text-gray-900 font-bold font-public text-2xl md:text-4xl lg:text-5xl flex justify-center'>
        Select Layout
        </h2>
        <div className='w-full h-fit  '>
           <ul className=' grid grid-cols-3 lg:grid-cols-6 '>
           {layouts.map((item )=>(
            <li key={item.id} className=' w-full h-fit flex flex-col items-center justify-center px-0.5 md:px-4 lg:px-1'>
                <img src={item.image} alt="" />
                <SharedButton
                onButtonClick={handleButtonclick}
                isActive={selected === item.id}
                item={item}
                />

            </li>
            ))}
           </ul>

        </div>
      
    </div>
  )
}

export default Layouts
