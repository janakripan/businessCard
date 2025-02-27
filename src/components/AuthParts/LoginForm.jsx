import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { SignupValidation } from '../../validations/SignupValidation'

function LoginForm() {
    const initialvalues = {
        Email:"",
        Password:"",
        ConfirmPassword:"",
    }
    const handleSubmit = (values) =>{

        console.log(values)

    }
  return (
    <div className='w-full h-full  '>
        <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={SignupValidation}
        >
        {({
          values,
          isSubmitting, 
        }) => {
          return (
            <Form className='w-full h-full px-4 flex flex-col justify-between   '>
                <div className='w-full h-fit flex flex-col gap-y-6  '>
                <div className="w-full h-fit flex flex-col    ">
                       <div className="h-12 w-full text-2xl rounded-xl flex items-center bg-[#254E7E17]">
                         
                         <Field
                           type="email"
                           name="Email"
                           placeholder="E-mail"
                           className=" w-full h-full border-none focus:outline-[#F66F4D] placeholder:text-base text-base bg-transparent pl-4 rounded-xl"
                         />
                       </div>
                       <ErrorMessage
                         name="Email"
                         component="div"
                         className="text-red-600 text-sm"
                       />
                     </div>
                      <div className="w-full h-fit flex flex-col    ">
                             <div className="h-12 w-full  text-2xl rounded-xl flex items-center bg-[#254E7E17]">
                              
                               <Field
                                 type="password"
                                 name="Password"
                                 placeholder="Enter Your Password"
                                 className=" w-full h-full border-none focus:outline-[#F66F4D] placeholder:text-base text-base bg-transparent pl-4 rounded-xl"
                               />
                             </div>
                             <ErrorMessage
                               name="Password"
                               component="div"
                               className="text-red-600 text-sm"
                             />
                           </div>
                           
                </div>

                           <div className='w-full h-12  rounded-lg scale-x-95 active:scale-90 transition-all duration-200  hover:scale-100 overflow-hidden mt-12 '>
                            <button disabled={isSubmitting}  type='submit'  className='w-full h-full bg-[#F66F4D] disabled:bg-slate-200'>
                                {
                                    isSubmitting ? "Signing Up" : "SignUp"
                                }


                            </button>
                            
                           </div>
                           
            </Form>
          )
        }
    }
    </Formik>
      
    </div>
  )
}

export default LoginForm
