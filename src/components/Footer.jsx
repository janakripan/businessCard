import React from 'react'

function Footer() {
  return (
    <div className='w-full min-h-[25vh] h-fit  flex  items-center lg:mb-24 px-4 '>

      <div className='w-full max-w-screen-xl mx-auto  h-full flex flex-col-reverse gap-y-20 md:flex-row items-center justify-between ' >

        <span className='text-lg md:text-xl lg:text-3xl font-public font-normal text-gray-400'>
          2024 Sacrosys Technologys
        </span>

        <button className='px-6 py-3  text-base active:scale-95 font-inter font-medium border-2 border-gray-400 text-gray-800 rounded-lg  hover:scale-105 transition-all duration-300 '>
            Contact Us
        </button>
        
      </div>


      
    </div>
  )
}

export default Footer
