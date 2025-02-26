import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useContext, useState } from "react";
import { validationSchema } from "../../validations/DetailsFormSchema";
import EditForm from "./EditForm";
import { useNavigate, useParams } from "react-router";
import { countries } from "../../constants/countries";
import { ApiContext } from "../../contexts/ApiContext";
import LoadingAnimation from "../Shared/LoadingAnimation";
import axios from "axios"; 

function EditPage() {
  
  const navigate = useNavigate();

  const { id } = useParams();
  const userId = Number(id);
  const { data,fetchData } = useContext(ApiContext);
  const userData = data.find((user) => user.ID === userId);

  const initialValues = userData || {
    FullName: "",
    Profession: "",
    Email: "",
    PhoneNumber: "",
    WhatsappNumber: "",
    LocationLink: "",
    BusinessName: "",
    Broucher: "",
    Description: "",
    Country: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
   
    
    setSubmitting(true);

    try {
      const response = await axios.put(
        "https://digiprofile-djh7gkgphhbgbmed.eastus-01.azurewebsites.net/api/putbusinesscard",
        values,
        {
          headers: {
            "id": userId, 
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        fetchData()
        navigate("/dashboard/alldata");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user data. Please try again.");
    } finally {
     
      setSubmitting(false);
    }
  };


  return (
    <div className="w-full h-screen  overflow-y-auto pt-28">
      {data ? (
        <div className="w-full max-w-screen-xl mx-auto px-4 py-10 lg:px-48  h-fit  ">
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {({ setFieldValue, values,isSubmitting }) => {
              return (
                <Form className="w-full h-fit px-4 gap-y-4">
                  <EditForm />

                  {/* <div className="w-full flex flex-col items-end justify-end h-fit overflow-hidden">
              <DragAndDrop
                setFieldValue={setFieldValue}
                values={values}
                setBrochurePreview={setBrochurePreview}
                brochurePreview={brochurePreview}
              />
              <ErrorMessage
                name="Broucher"
                component="div"
                className="text-red-600 text-sm"
              />
            </div> */}
                  {/* {brochurePreview?.length > 0 && (
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
            )} */}
                  <div className="w-full md:w-1/2 flex flex-col mt-4 h-fit">
                    <div className="h-12 w-full pl-4 text-2xl rounded-xl flex items-center bg-[#254E7E17] px-4">
                      <Field
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
                      </Field>
                    </div>
                    <ErrorMessage
                      name="Country"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <div className="w-full h-fit mt-4 ">
                    <div className="w-full  h-40 rounded-xl overflow-hidden ">
                      <label htmlFor="Description" className="sr-only">
                        {" "}
                        Description{" "}
                      </label>
                      <Field
                        as="textarea"
                        name="Description"
                        placeholder="Short Brief About you"
                        className=" w-full h-full border-none focus:outline-none p-2 placeholder:text-base text-base bg-[#254E7E17] pl-4"
                      />
                    </div>
                    <ErrorMessage
                      name="Description"
                      component="div"
                      className="text-red-600 text-sm"
                    />
                  </div>
                  <button
                className="w-full mt-12 h-14 bg-[#F66F4D] disabled:bg-gray-400  active:scale-95 active:bg-[#FA8C6A] text-white text-2xl rounded-xl mb-32 hover:scale-105 transition-all duration-300 "
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Generating..." : "Generate"}
              </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
}

export default EditPage;
