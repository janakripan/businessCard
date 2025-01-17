import React from 'react'

function Header() {
  return (
    <div className='w-full h-24 flex items-center  absolute top-0 mt-4'>
        <div className="w-full max-w-screen-xl  h-fit flex justify-between items-center mx-auto px-4">
            <div className='flex flex-row items-center gap-x-2'> 
                <div className='flex items-center justify-center rounded-full bg-[#FF7B29] text-white text-base font-inter w-9 aspect-square font-bold '>
                    
                        ST
                   
                </div>
                <h5 className='text-gray-900 text-base md:text-xl lg:text-2xl font-bold'>
                    Sacrosys Technology's
                </h5>
            </div>
            <div>
                <button className=' bg-[#31C3E0] scale-75 md:scale-100  px-6 py-3 text-white text-base font-inter font-medium rounded-lg hover:bg-[#89DCED] hover:scale-105 transition-all duration-300 '>

                    Contact Us

                </button>
            </div>
        </div>
      
    </div>
  )
}

export default Header
