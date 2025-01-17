import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function DetailsForm() {

    // const [formData , SetFormData] = useState({
    //     userName:"",
    //     job:"",
    //     email:"",
    //     phoneNumber:"",
    //     whatsAppNumber:"",
    //     locationLink:"",
    //     businessName:"",
    //     broucher:null,
    //     about:'',
    // })
    const initialValues = {
        userName:"",
        job:"",
        email:"",
        phoneNumber:"",
        whatsAppNumber:"",
        locationLink:"",
        businessName:"",
        broucher:null,
        about:'',
    }



    const validationSchema = Yup.object({
        userName: Yup.string().required("Name is requiired"),
        job: Yup.string().required("Job name is requiired"),
        email: Yup.string().required("E-mail is requiired").email("Invalid E-mail"),
        phoneNumber: Yup.string()
                .matches(/^\d{10}$/, "phone number must be 10 digits")
                .required("phone number is requiired"),
        whatsAppNumber: Yup.string()
                .matches(/^\d{10}$/, "phone number must be 10 digits")
                .required("whatsapp number is requiired"),
        locationLink: Yup.string()
        .url("Must be a valid URL") 
        .matches(
          /^(https?:\/\/)?(www\.)?(google\.com\/maps|goo\.gl\/maps)/,
          "Must be a valid Google Maps link"
        )
        .required("Location link is required"),
        businessName: Yup.string().required("business name is requiired"),
        broucher:Yup.mixed()
        .test(
          "fileType",
          "Unsupported file format. Only JPG, PNG, and PDF are allowed.",
          (value) =>
            value &&
            ["image/jpeg", "image/png", "application/pdf"].includes(value.type)
        ),
        about: Yup.string().required("brief is required"),


    })

    
    
    const handleSubmit = (values) => {
        // Example: Send data to API
        console.log("Form data:", values);
        alert("Form submitted successfully!");
      };



  return (
    <div className='w-full h-fit flex flex-col items-center mt-48 px-4'>

        <h2 className='text-xl md:text-3xl lg:text-4xl font-bold font-public  text-gray-800'>
            Fill Your Details
        </h2>

        <p className='md:text-lg text-center text-base text-gray-800 font-public font-normal mt-2'>
        Provide your information to generate your digital business card.
        </p>

       <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
       >
        {({setFieldValue})=>(
             <Form  className='w-full px-4 md:w-8/12 flex flex-col gap-y-4 mt-16'>
             <div className='w-full h-fit flex flex-col lg:flex-row lg:justify-between bg-transparent gap-4'>
                 <div className='flex flex-col items-center w-full lg:w-1/2 h-fit rounded-xl   '>
                     <div className=' w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]'>
                     <PersonIcon/>
                     
                     <Field type="text"
                     name='userName'
                     placeholder='Full Name'
                     className=' w-full h-full border-none focus:outline-none bg-transparent pl-4'
                    
 
                     />
                     </div>
                     
                     <ErrorMessage name="userName" component="div" className="text-red-600 text-sm" /> 
                 </div>
                 
                 <div className='flex flex-col items-center w-full lg:w-1/2 h-fit rounded-xl'>
                     <div className='w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]'>
                     <GiPoliceOfficerHead/>
                    
                     
                     <Field type="text"
                     name='job'
                     
                     placeholder='Profession / Position'
                     className='  w-full h-full border-none focus:outline-none bg-transparent pl-4'
                     
 
 
                     />
                      </div>
                      <ErrorMessage name="job" component="div" className="text-red-600 text-sm" /> 
                 </div>
             </div>
 
 
 
             <div className='w-full h-fit flex flex-col    '>
                     <div className='h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17]'>
                     <BiLogoGmail/>
                     
                    
                     <Field type="email"
                     name='email'
                     
                     placeholder='E-mail'
                     className=' w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4'
                    
 
                     />
                     </div>
                     <ErrorMessage name="email" component="div" className="text-red-600 text-sm" /> 
                 </div>
                 <div className='w-full flex flex-col  h-fit  '>
                     <div className='h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]'>
                     <BiSolidContact/>
                     
                   
                     <Field type="tel"
                     name='phoneNumber'
                     
                     placeholder='phoneNumber'
                     className=' w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent'
                     
 
 
                     />
                     </div>
                     <ErrorMessage name="phoneNumber" component="div" className="text-red-600 text-sm" /> 
                 </div>
                 <div className='w-full flex flex-col  h-fit  '>
                     <div className='h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]'>
                     <IoLogoWhatsapp/>
                     
                     
                     <Field type="tel"
                     name='whatsAppNumber'
                     
                     placeholder='WhatsApp Number'
                     className=' w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4'
                     
 
                     />
                     </div>
                     <ErrorMessage name="whatsAppNumber" component="div" className="text-red-600 text-sm" /> 
                 </div>
                 <div className='w-full flex flex-col  h-fit  overflow-hidden'>
                     <div className='h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]'>
                     <BiSolidLocationPlus/>
                     
                     
                     <Field type="url"
                     name='locationLink'
                     
                     placeholder='Location Link'
                     className=' w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4'
                     
 
 
                     />
                     </div>
                     <ErrorMessage name="locationLink" component="div" className="text-red-600 text-sm" />
                 </div>
                 <div className='w-full flex flex-col  h-fit  '>
                     <div className='h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]'>
                     <MdBusinessCenter/>
                     
                     
                     <Field type="text"
                     name='businessName'
                    
                     placeholder='Business Name'
                     className=' w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4'
                    
 
 
                     />
                     </div>
                     <ErrorMessage name="businessName" component="div" className="text-red-600 text-sm" />
                 </div>
                 <div className='w-full flex flex-col items-end justify-end h-fit overflow-hidden'>
                     
                    <div className='w-fit h-12 rounded-xl flex '>
                   
                    <label htmlFor="broucher" className="cursor-pointer flex items-center bg-[#254E7E17] px-4 rounded-l-lg">
                         Upload your Broucher
                     </label>
                     <input
                      type="file"
                      id="broucher"
                      className="hidden"
                      onChange={(e) => setFieldValue("broucher", e.target.files[0])}
                     />
                      
                     <div className='h-full w-fit pr-4 text-2xl rounded-r-xl flex items-center bg-[#254E7E17]'>
                     <BsPaperclip/>
                     </div>
                    </div>
                    <ErrorMessage name="broucher" component="div" className="text-red-600 text-sm" />
                     
                 </div> 
                 
                 <div className='w-full h-fit '>
                     
                     <div className='w-full  h-40 rounded-xl overflow-hidden '>
                     <label htmlFor="about" className='sr-only'> about </label>
                     <Field
                      as="textarea"
                     name='about'
                     
                     placeholder='Short Brief About you'
                     className=' w-full h-full border-none focus:outline-none p-2 placeholder:text-base text-base bg-[#254E7E17] pl-4'
                     
 
 
                     />
                     </div>
                     <ErrorMessage name="about" component="div" className="text-red-600 text-sm" />
                 </div>
 
                 <button className='w-full mt-12 h-14 bg-[#F66F4D]  text-white text-2xl rounded-xl mb-32 hover:scale-105 transition-all duration-300 '
                 type="submit"
                 
                 >
                     Generate
                 </button>
 
 
         </Form>
 
        )}
       </Formik>
      
    </div>
  )
}

export default DetailsForm
