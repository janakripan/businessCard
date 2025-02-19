import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { BiLogoGmail } from "react-icons/bi";
import { BiSolidContact } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";
import { BiSolidLocationPlus } from "react-icons/bi";
import { MdBusinessCenter } from "react-icons/md";
import { Field, ErrorMessage } from "formik";
import { countries } from "../../constants/countries";

function EditForm({values}) {
  return (
    <div className="w-full h-fit flex flex-col gap-y-4">
      <div className="w-full h-fit flex flex-col lg:flex-row lg:justify-between bg-transparent gap-4">
        <div className="flex flex-col  w-full lg:w-1/2 h-fit rounded-xl   ">
          <div className=" w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]">
            <PersonIcon />
            <Field
              type="text"
              name="FullName"
              placeholder="Full Name"
              className=" w-full h-full border-none focus:outline-none bg-transparent pl-4"
            />
          </div>

          <ErrorMessage
            name="FullName"
            component="div"
            className="text-red-600 text-sm"
          />
        </div>

        <div className="flex flex-col  w-full lg:w-1/2 h-fit rounded-xl">
          <div className="w-full h-12 px-4 flex rounded-lg items-center bg-[#254E7E17]">
            <GiPoliceOfficerHead />
            <Field
              type="text"
              name="Profession"
              placeholder="Profession / Position"
              className="  w-full h-full border-none focus:outline-none bg-transparent pl-4"
            />
          </div>
          <ErrorMessage
            name="Profession"
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
            name="Email"
            placeholder="E-mail"
            className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4 rounded-r-xl"
          />
        </div>
        <ErrorMessage
          name="Email"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div className="w-full flex flex-col  h-fit  ">
        <div className="h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
          <BiSolidContact />
          <Field
            type="tel"
            name="PhoneNumber"
            placeholder="PhoneNumber"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
            className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent"
          />
        </div>
        <ErrorMessage
          name="PhoneNumber"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div className="w-full flex flex-col  h-fit  ">
        <div className="h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
          <IoLogoWhatsapp />
          <Field
            type="tel"
            name="WhatsappNumber"
            placeholder="Whatsapp Number"
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "");
            }}
            className="  w-full h-full border-none focus:outline-none placeholder:text-base text-base pl-4 bg-transparent"
          />
        </div>
        <ErrorMessage
          name="WhatsappNumber"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>

      <div className="w-full flex flex-col  h-fit  overflow-hidden">
        <div className="h-12 w-full pl-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
          <BiSolidLocationPlus />
          <Field
            type="url"
            name="LocationLink"
            placeholder="Location Link"
            className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4"
          />
        </div>
        <ErrorMessage
          name="LocationLink"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>
      <div className="w-full flex flex-col  h-fit  ">
        <div className="h-12 w-full px-4 text-2xl flex rounded-xl items-center bg-[#254E7E17]">
          <MdBusinessCenter />

          <Field
            type="text"
            name="BusinessName"
            placeholder="Business Name"
            className=" w-full h-full border-none focus:outline-none placeholder:text-base text-base bg-transparent pl-4"
          />
        </div>
        <ErrorMessage
          name="BusinessName"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col h-fit">
        <div className="h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17] px-4">
          {/* <Field
            name="Country"
            as="select"
            value={values.Country}
            className="w-full text-base h-full border-none focus:outline-none bg-transparent "
          >
            <option value="" disabled>
              Select a Country
            </option>
            {countries.map((country) => (
              <option
                key={country.id}
                value={country.name}
                label={country.name}
              />
            ))}
          </Field> */}
        </div>
        <ErrorMessage
          name="Country"
          component="div"
          className="text-red-600 text-sm"
        />
      </div>
    </div>
  );
}

export default EditForm;
