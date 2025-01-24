import React from 'react'
import PersonIcon from "@mui/icons-material/Person";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";
import { Field, ErrorMessage } from "formik";

function NameField() {
  return (
    <div className='w-full h-fit flex flex-col gap-y-4'>

<div className="w-full h-fit flex flex-col lg:flex-row lg:justify-between bg-transparent gap-4">
                  <div className="flex flex-col  w-full lg:w-1/2 h-fit rounded-xl   ">
                    <div className=" w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]">
                      <PersonIcon />
                      <Field
                        type="text"
                        name="userName"
                        placeholder="Full Name"
                        className=" w-full h-full border-none focus:outline-none bg-transparent pl-4"
                      />
                    </div>
    
                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
    
                  <div className="flex flex-col  w-full lg:w-1/2 h-fit rounded-xl">
                    <div className="w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]">
                      <GiPoliceOfficerHead />
                      <Field
                        type="text"
                        name="job"
                        placeholder="Profession / Position"
                        className="  w-full h-full border-none focus:outline-none bg-transparent pl-4"
                      />
                    </div>
                    <ErrorMessage
                      name="job"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                </div>
                <div className="w-full h-fit flex flex-col    ">
                              <div className="h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17]">
                                <BiLogoGmail />
                                <Field
                                  type="email"
                                  name="email"
                                  placeholder="E-mail"
                                  className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4"
                                />
                              </div>
                              <ErrorMessage
                                name="email"
                                component="div"
                                className="text-red-600 text-sm"
                              />
                            </div>
                
                            <div className="w-full flex flex-col  h-fit  ">
                              <div className="h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
                                <BiSolidContact />
                                <Field
                                  type="tel"
                                  name="phoneNumber"
                                  placeholder="PhoneNumber"
                                  onInput={(e) => {
                                    e.target.value = e.target.value.replace(/\D/g, "");
                                  }}
                                  className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent"
                                />
                              </div>
                              <ErrorMessage
                                name="phoneNumber"
                                component="div"
                                className="text-red-600 text-sm"
                              />
                            </div>
                
                            <div className="w-full flex flex-col  h-fit  ">
                              <div className="h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
                                <IoLogoWhatsapp />
                                <Field
                                  type="tel"
                                  name="whatsAppNumber"
                                  placeholder="WhatsApp Number"
                                  onInput={(e) => {
                                    e.target.value = e.target.value.replace(/\D/g, "");
                                  }}
                                  className="  w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent"
                                />
                              </div>
                              <ErrorMessage
                                name="whatsAppNumber"
                                component="div"
                                className="text-red-600 text-sm"
                              />
                            </div>
                
                            <div className="w-full flex flex-col  h-fit  overflow-hidden">
                              <div className="h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
                                <BiSolidLocationPlus />
                                <Field
                                  type="url"
                                  name="locationLink"
                                  placeholder="Location Link"
                                  className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4"
                                />
                              </div>
                              <ErrorMessage
                                name="locationLink"
                                component="div"
                                className="text-red-600 text-sm"
                              />
                            </div>
                            <div className="w-full flex flex-col  h-fit  ">
                              <div className="h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
                                <MdBusinessCenter />
                
                                <Field
                                  type="text"
                                  name="businessName"
                                  placeholder="Business Name"
                                  className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4"
                                />
                              </div>
                              <ErrorMessage
                                name="businessName"
                                component="div"
                                className="text-red-600 text-sm"
                              />
                            </div>

    </div>
  )
}

export default NameField
