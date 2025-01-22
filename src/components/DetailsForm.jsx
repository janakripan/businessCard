import React, { useEffect, useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";
import { BsPaperclip } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { IoIosCloseCircle } from "react-icons/io";
import { countries } from '../constants/countries';
import { validationSchema } from '../validations/DetailsFormSchema';

function DetailsForm() {

    const [brochurePreview, setBrochurePreview] = useState(null)

    const [data , setData] = useState(null)

    
   
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
        country:'',
        gender:'',
    }


    useEffect(() => {
        if (data !== null) {
          console.log("Data updated:", data);
        }
      }, [data]); 
    
    
    
    const handleSubmit = (values,{ resetForm,setFieldValue }) => {
        
        
        setData(values)
        
        alert("Form submitted successfully!");

        setFieldValue("broucher", null); 
        setBrochurePreview(null);

        resetForm()
        
      };

      const handleFileChange = (e, setFieldValue) => {
        const file = e.target.files[0];
        if (file) {
            setFieldValue('broucher', file);
        

        const fileReader = new FileReader()
        fileReader.onloadend= () => {
            setBrochurePreview(fileReader.result);
        }
        fileReader.readAsDataURL(file);
      }
    }

    const handleDelete = (setFieldValue) =>{
        setFieldValue('broucher', null);
        setBrochurePreview(null);
    }



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
        {({setFieldValue, values})=>(
             <Form  className='w-full px-4 md:w-8/12 flex flex-col gap-y-4 mt-16'>
             <div className='w-full h-fit flex flex-col lg:flex-row lg:justify-between bg-transparent gap-4'>
                 <div className='flex flex-col  w-full lg:w-1/2 h-fit rounded-xl   '>
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
                 
                 <div className='flex flex-col  w-full lg:w-1/2 h-fit rounded-xl'>
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
                     placeholder='PhoneNumber'
                     onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, "");
                      }}
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
                     onInput={(e) => {
                        e.target.value = e.target.value.replace(/\D/g, ""); 
                      }}
                     className='  w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent'
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


                 {!brochurePreview && (<div className='w-full flex flex-col items-end justify-end h-fit overflow-hidden'>
                     
                    <div className='w-fit h-12 rounded-xl flex '>
                   
                    <label htmlFor="broucher" className="cursor-pointer flex items-center bg-[#254E7E17] px-4 text-gray-400 rounded-l-lg">
                         Upload your Broucher
                     </label>
                     <input
                      type="file"
                      id="broucher"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setFieldValue)}
                     />
                      
                     <div className='h-full w-fit pr-4 text-2xl rounded-r-xl flex items-center bg-[#254E7E17]'>
                     <BsPaperclip/>
                     </div>
                    </div>
                    <ErrorMessage name="broucher" component="div" className="text-red-600 text-sm" />
                     
                 </div> )}
                 {brochurePreview&&(
                    <div className='w-full h-fit flex justify-end'>
                        <div className="w-fit mt-4 flex flex-col ">
                    <p className="text-sm text-gray-600 mb-2 ">Preview:</p>
                    <div className="flex items-end justify-end flex-col gap-3">
                      {brochurePreview.includes('data:image') ? (
                        <img
                          src={brochurePreview}
                          alt="Brochure Preview"
                          className="w-32 h-32 object-contain border-2 border-gray-300 rounded-md"
                        />
                      ) : (
                        <embed
                          src={brochurePreview}
                          type="application/pdf"
                          width="300"
                          height="200"
                        />
                    )}
                    <button
                      type="button"
                      onClick={() => handleDelete(setFieldValue)} // Handle delete file
                      className="text-red-500 text-sm"
                    >
                     <IoIosCloseCircle style={{ fontSize: "30px"}} />
                    </button>
                  </div>
                </div>
                </div>
                        
                 )}
                 <div className='w-full h-fit flex flex-col md:flex-row items-center justify-between gap-3 '>
                    <div className='w-full md:w-1/2 flex flex-col h-fit'>
                        <div className='h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17] px-4'>
                             <Field
                             name="country" as="select" value={values.country} className="w-full text-base h-full border-none focus:outline-none bg-transparent "
                                >
                                     <option value="" disabled selected >Select a Country</option>
                                        {countries.map((country) => (
                                        <option key={country.id} value={country.id} label={country.name}/>
                                        
                                        
                                    ))}
                            </Field>

                        </div>
                        <ErrorMessage name="country" component="div" className="text-red-600 text-sm" />
                    </div>


                    <div className=" w-full md:w-1/2 flex flex-col  justify-center gap-2 mb-4 px-4">
                        <label className="text-gray-700 font-medium">Gender</label>
                        <div role="group" aria-labelledby="gender-radio-group" className="flex gap-4 mt-2">
                        <div>
                        <Field
                         type="radio"
                         id="male"
                         name="gender"
                         value="male"
                         className="mr-2"
                         />
                        <label htmlFor="male" className="text-gray-600">Male</label>
                        </div>
                        <div>
                        <Field
                        type="radio"
                        id="female"
                        name="gender"
                        value="female"
                        className="mr-2"
                         />
                            <label htmlFor="female" className="text-gray-600">Female</label>
                        </div>
                        <div>
                         <Field
                             type="radio"
                             id="other"
                             name="gender"
                             value="other"
                            className="mr-2"
                            />
                             <label htmlFor="other" className="text-gray-600">Other</label>
                        </div>
                    </div>
                        <ErrorMessage name="gender" component="div" className="text-red-600 text-sm" />
                    </div>
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
 
                 <button className='w-full mt-12 h-14 bg-[#F66F4D] active:scale-95 active:bg-[#FA8C6A] text-white text-2xl rounded-xl mb-32 hover:scale-105 transition-all duration-300 '
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
