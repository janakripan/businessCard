import React, {  useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoIosCloseCircle } from "react-icons/io";
import { countries } from "../constants/countries";
import { validationSchema } from "../validations/DetailsFormSchema";
import NameField from "./DetailFormParts/NameField";
import DragAndDrop from "./DetailFormParts/DragAndDrop";

function DetailsForm() {
  //state variables
  const [brochurePreview, setBrochurePreview] = useState([]);

  const [data, setData] = useState(null);

  const initialValues = {
    userName: "",
    job: "",
    email: "",
    phoneNumber: "",
    whatsAppNumber: "",
    locationLink: "",
    businessName: "",
    broucher: [],
    about: "",
    country: "",
    gender: "",
  };

  //console outputs

  useEffect(() => {
    if (data !== null) {
      console.log("Data updated:", data);
    }
  }, [data]);

  

  //handle submit function

  const handleSubmit = (values, { resetForm, setFieldValue }) => {
    setData(values);

    alert("Form submitted successfully!");

    setFieldValue("broucher", []);

    setBrochurePreview([]);

    resetForm();
  };

  

  // delete button function for broucher preview.
  

  const handleDelete = (index, setFieldValue, values) => {
    const updatedPreviews = brochurePreview.filter((_, i) => i !== index);
    setBrochurePreview(updatedPreviews);

    const toDelete = () => {
      const dataToDelete = values.broucher.filter((_, i) => i !== index);
      return dataToDelete;
    };

    setFieldValue("broucher", toDelete());
  };

  return (
    <div className="w-full h-fit flex flex-col items-center mt-48 px-4">
      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-public  text-gray-800">
        Fill Your Details
      </h2>

      <p className="md:text-lg text-center text-base text-gray-800 font-public font-normal mt-2">
        Provide your information to generate your digital business card.
      </p>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className="w-full px-4 md:w-8/12 flex flex-col gap-y-4 mt-16">
            <NameField />

            <div className="w-full flex flex-col items-end justify-end h-fit overflow-hidden">
              <DragAndDrop 
              setFieldValue={setFieldValue}
              values={values} 
              setBrochurePreview={setBrochurePreview} 
              brochurePreview={brochurePreview}
              />
              <ErrorMessage
                name="broucher"
                component="div"
                className="text-red-600 text-sm"
              />
             </div>
            {brochurePreview?.length > 0 && (
              <div className="w-full h-fit flex flex-col items-center md:flex-row gap-x-4  justify-center px-6 mb-6 ">
                {brochurePreview.map((preview, index) => (
                  <div key={index} className="w-fit  mt-4  flex flex-col  ">
                    <div className=" flex justify-between w-full mb-2 items-center">
                      <p className="text-sm text-gray-600 mb-2 ">Preview:</p>
                      <button
                        type="button"
                        onClick={() =>
                          handleDelete(index, setFieldValue, values)
                        }
                        className="text-red-500 text-sm"
                      >
                        <IoIosCloseCircle style={{ fontSize: "30px" }} />
                      </button>
                    </div>
                    <div className=" w-full h-full md:w-44 md:h-44  overflow-hidden items-center justify-center flex ">
                      {preview?.fileFormate.split("/")?.includes("image") ? (
                        <img
                          src={preview.url}
                          alt={`Brochure Preview ${index + 1}`}
                          className="w-full h-full object-contain border-2 border-gray-300 rounded-md"
                        />
                      ) : (
                        <embed
                          src={preview.url}
                          type="application/pdf"
                          className="w-full   h-full"
                          style={{ objectFit: "contain" }}
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between gap-3 ">
              <div className="w-full md:w-1/2 flex flex-col h-fit">
                <div className="h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17] px-4">
                  <Field
                    name="country"
                    as="select"
                    value={values.country}
                    className="w-full text-base h-full border-none focus:outline-none bg-transparent "
                  >
                    <option value="" disabled>
                      Select a Country
                    </option>
                    {countries.map((country) => (
                      <option
                        key={country.id}
                        value={country.id}
                        label={country.name}
                      />
                    ))}
                  </Field>
                </div>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>

              <div className=" w-full md:w-1/2 flex flex-col  justify-center gap-2 mb-4 px-4">
                <label className="text-gray-700 font-medium">Gender</label>
                <div
                  role="group"
                  aria-labelledby="gender-radio-group"
                  className="flex gap-4 mt-2"
                >
                  <div>
                    <Field
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="mr-2"
                    />
                    <label htmlFor="male" className="text-gray-600">
                      Male
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="mr-2"
                    />
                    <label htmlFor="female" className="text-gray-600">
                      Female
                    </label>
                  </div>
                  <div>
                    <Field
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      className="mr-2"
                    />
                    <label htmlFor="other" className="text-gray-600">
                      Other
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-600 text-sm"
                />
              </div>
            </div>

            <div className="w-full h-fit ">
              <div className="w-full  h-40 rounded-xl overflow-hidden ">
                <label htmlFor="about" className="sr-only">
                  {" "}
                  about{" "}
                </label>
                <Field
                  as="textarea"
                  name="about"
                  placeholder="Short Brief About you"
                  className=" w-full h-full border-none focus:outline-none p-2 placeholder:text-base text-base bg-[#254E7E17] pl-4"
                />
              </div>
              <ErrorMessage
                name="about"
                component="div"
                className="text-red-600 text-sm"
              />
            </div>

            <button
              className="w-full mt-12 h-14 bg-[#F66F4D] active:scale-95 active:bg-[#FA8C6A] text-white text-2xl rounded-xl mb-32 hover:scale-105 transition-all duration-300 "
              type="submit"
            >
              Generate
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default DetailsForm;
 