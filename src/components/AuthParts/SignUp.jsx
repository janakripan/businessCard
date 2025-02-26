import React from 'react'
import bgPc from '../../Assets/Telecommuting-rafiki.png'
import { Formik } from 'formik'
import AuthForm from './AuthForm'
import GoogleSignup from './GoogleSignup'


function SignUp() {
  return (
    <div className='w-full max-w-screen-xl mx-auto  h-screen  flex items-center justify-center pt-24  '>

        <div className='w-full   h-full flex items-center justify-center md:py-6 lg:pt-20 '
         style={{ backgroundImage: "url('/authBg.svg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <div className='w-11/12 h-full  shadow-lg relative overflow-hidden bg-gray-50 p-4'>
            <img src={bgPc} alt="" className='object-cover w-[50%] absolute right-0  ' />
            <div className='w-5/12 h-full bg-white shadow-sm shadow-[#F66F4D] rounded-lg p-4'>
            <AuthForm/>
            <p>
                OR
            </p>
            <GoogleSignup/>

            </div>

            </div>

        </div>
      
    </div>
  )
}

export default SignUp
