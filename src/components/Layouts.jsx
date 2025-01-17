import React, { useState } from 'react'
import { layouts } from '../constants/layouts'
import SharedButton from '../shared/SharedButton'

function Layouts() {
  const [selected , setSelected] = useState(null)


  const handleButtonclick = (id) =>{
    setSelected( id )



  }
  return (
    <div className='w-full mt-20'>

        <h2 className='py-16 text-gray-900 font-bold font-public text-5xl flex justify-center'>
        Select Layout
        </h2>
        <div className='w-full h-fit  '>
           <ul className=' flex flex-row '>
           {layouts.map((item )=>(
            <li key={item.id} className=' w-full h-fit flex flex-col items-center px-1'>
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
