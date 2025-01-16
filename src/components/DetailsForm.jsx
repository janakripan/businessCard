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

function DetailsForm() {

    const [formData , SetFormData] = useState({
        userName:"",
        job:"",
        email:"",
        phoneNumber:"",
        whatsAppNumber:"",
        locationLink:"",
        businessName:"",
        broucher:null,
        about:'',
    })

    const [errors , setErrors] = useState()

    const validationSchema = Yup.object({
        userName: Yup.string().required("Name is requiired"),
        job: Yup.string().required("Job name is requiired"),
        email: Yup.string().required("E-mail is requiired").email("Invalid E-mail"),
        phoneNumber: Yup.string()
                .matches(/^\d{10}$/, "phone number must be 10 digits")
                .required("Name is requiired"),
        whatsAppNumber: Yup.string()
                .matches(/^\d{10}$/, "phone number must be 10 digits")
                .required("Name is requiired"),
        locationLink: Yup.string()
        .url("Must be a valid URL") 
        .matches(
          /^(https?:\/\/)?(www\.)?(google\.com\/maps|goo\.gl\/maps)/,
          "Must be a valid Google Maps link"
        )
        .required("Location link is required"),
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

    const handlechange = (e)=>{

        const { name , value }= e.target;
        SetFormData({
            ...formData,
            [name] : value
        })
        

        


    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        SetFormData({
            ...formData,
            broucher: file, 
        });
    };
    const handleSubmit = async(e) => {
        e.preventDefault()

        try{
            await validationSchema.validate(formData,{abortEarly: false})
            console.log("form submitted", formData)
        } catch (error){
            console.log(error.inner)
        }


    }



  return (
    <div className='w-full h-fit flex flex-col items-center mt-48'>

        <h2 className=' text-4xl font-bold font-public  text-gray-800'>
            Fill Your Details
        </h2>

        <p className='text-lg text-gray-800 font-public font-normal mt-2'>
        Provide your information to generate your digital business card.
        </p>

        <form action="submit" onSubmit={handleSubmit} className='w-8/12 flex flex-col gap-y-4 mt-16'>
            <div className='w-full h-fit flex flex-row justify-between bg-transparent gap-4'>
                <div className='flex flex-row items-center w-1/2 h-12 rounded-xl overflow-hidden '>
                    <div className='h-full w-fit px-4 flex items-center bg-[#254E7E17]'>
                    <PersonIcon/>
                    </div>
                    <label htmlFor="userName" className='sr-only'> userName</label>
                    <input type="text"
                    name='userName'
                    value={formData.userName}
                    placeholder='Full Name'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}

                    />
                </div>
                <div className='w-1/2 flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <GiPoliceOfficerHead/>
                    </div>
                    <label htmlFor="job" className='sr-only'> job</label>
                    <input type="text"
                    name='job'
                    value={formData.job}
                    placeholder='Profession / Position'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>
            </div>



            <div className='w-full flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <BiLogoGmail/>
                    </div>
                    <label htmlFor="email" className='sr-only'> email</label>
                    <input type="email"
                    name='email'
                    value={formData.email}
                    placeholder='E-mail'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}

                    />
                </div>
                <div className='w-full flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <BiSolidContact/>
                    </div>
                    <label htmlFor="phoneNumber" className='sr-only'> phoneNumber</label>
                    <input type="tel"
                    name='phoneNumber'
                    value={formData.phoneNumber}
                    placeholder='phoneNumber'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>
                <div className='w-full flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <IoLogoWhatsapp/>
                    </div>
                    <label htmlFor="whatsAppNumber" className='sr-only'> whatsAppNumber</label>
                    <input type="tel"
                    name='whatsAppNumber'
                    value={formData.whatsAppNumber}
                    placeholder='WhatsApp Number'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>
                <div className='w-full flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <BiSolidLocationPlus/>
                    </div>
                    <label htmlFor="locationLink" className='sr-only'> locationLink</label>
                    <input type="url"
                    name='locationLink'
                    value={formData.locationLink}
                    placeholder='Location Link'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>
                <div className='w-full flex flex-row  h-12 rounded-xl overflow-hidden'>
                    <div className='h-full w-fit px-4 text-2xl flex items-center bg-[#254E7E17]'>
                    <MdBusinessCenter/>
                    </div>
                    <label htmlFor="businessName" className='sr-only'> businessName</label>
                    <input type="text"
                    name='businessName'
                    value={formData.businessName}
                    placeholder='Business Name'
                    className=' w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>
                <div className='w-full flex flex-row justify-end h-12 rounded-xl overflow-hidden'>
                    
                    <label htmlFor="broucher" className='cursor-pointer flex items-center rounded-l-xl justify-center text-gray-400 bg-[#254E7E17]  font-normal py-2 px-4   transition duration-200"'>
                    Upload your Broucher
                         </label>
                    <input type="file"
                    id='broucher'
                    name='broucher'
                    placeholder='Upload your Broucher'
                    className=' hidden w-full h-full border-none focus:outline-none bg-[#254E7E17]'
                    onChange={handleFileChange}


                    />
                    <div className='h-full w-fit pr-4 text-2xl rounded-r-xl flex items-center bg-[#254E7E17]'>
                    <BsPaperclip/>
                    </div>
                    
                </div> 
                
                <div className='w-full  h-40 rounded-xl overflow-hidden'>
                    
                    <label htmlFor="about" className='sr-only'> about</label>
                    <textarea
                     type=""
                    name='about'
                    value={formData.about}
                    placeholder='Short Brief About you'
                    className=' w-full h-full border-none focus:outline-none p-2 bg-[#254E7E17]'
                    onChange={handlechange}


                    />
                </div>

                <button className='w-full mt-12 h-14 bg-[#F66F4D]  text-white text-2xl rounded-xl mb-32 '
                type='submit'
                
                >
                    Generate
                </button>


        </form>

      
    </div>
  )
}

export default DetailsForm
