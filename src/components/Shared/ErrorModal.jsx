import React from 'react'
import { AnimatePresence, motion } from "motion/react"

function ErrorModal({apiError, setApiError}) {
  return (
    <AnimatePresence>
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{
      duration:.1,
      ease: "easeInOut",
      delay:.1
    }}
    className='w-full h-screen bg-black/50 fixed inset-0 flex items-center justify-center'>
        <motion.div
        initial={{opacity:0 , scale:0}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0}}
        transition={{duration:.2 , delay:.1, ease:"easeInOut"}}

         className='w-fit py-8 px-6 h-fit bg-white shadow-lg flex flex-col items-center gap-4'>
            <p className=' font-inter text-red-500 font-medium shadow-2xl '>
                {"Error:"+apiError}
            </p>
            <button
            onClick={()=>setApiError("")}
             className='px-6 py-1 bg-[#F66F4D] rounded-lg mt-3 active:scale-90 active:bg-gray-500 transition-all duration-150 '>
                OK
            </button>

        </motion.div>
      
    </motion.div>
    </AnimatePresence>
  )
}

export default ErrorModal
