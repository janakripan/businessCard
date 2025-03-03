import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { LoginValidation } from '../../validations/LoginValidation'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';



function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();

    const initialvalues = {
        UserName:"",
        Password:"",
    }
    const handleSubmit = async(values,{setSubmitting, setErrors}) =>{
     
      try{
       

          const response = await axios.request({
            method: "GET",
            url: "https://sacrosys.net:6662/api/7263/GetAuthorized",
            headers:{
              uid:values.UserName,
              pwd: values.Password, 
            token: "w^0V6jJamvLyaBy5VEYQ2x4gzwrx5BifP6wjB/hQDNmDFSJ2//4/4oze7iJuiFrd",
            }
          });
          console.log("Login Successful:", response.data);
          login(response.data.emplyeeCode);
          navigate("/dashboard/alldata" ,{ replace: true });
         }catch (error) {
          console.error("Login Failed:", error.response?.data || error.message);
          setErrors({ UserName: "Invalid Username or password" });
        } finally {
          setSubmitting(false);
        }
      
      }
  return (
    <div className='w-full h-full  '>
        <Formik
        initialValues={initialvalues}
        onSubmit={handleSubmit}
        validationSchema={LoginValidation}
        >
        {({
          values,
          isSubmitting, 
        }) => {
          return (
            <Form className='w-full h-full px-4 flex flex-col justify-between   ' >
                <div className='w-full h-fit flex flex-col gap-y-6  '>
                <div className="w-full h-fit flex flex-col    ">
                       <div className="h-12 w-full text-2xl rounded-xl flex items-center bg-[#254E7E17]">
                         
                         <Field
                           type="text"
                           name="UserName"
                           placeholder="E-mail or Username"
                           autoComplete="username"
                           className=" w-full h-full border-none focus:outline-[#F66F4D] placeholder:text-base text-base bg-transparent pl-4 rounded-xl"
                         />
                       </div>
                       <ErrorMessage
                         name="UserName"
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
                                 autoComplete="current-password"
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
                                    isSubmitting ? "Logging In" : "Login"
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