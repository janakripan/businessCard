import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { validationSchema } from "../../validations/DetailsFormSchema";
import EditForm from "./EditForm";

function EditPage() {
  const initialValues = {
    FullName: "",
    Profession: "",
    Email: "",
    PhoneNumber: "",
    WhatsappNumber: "",
    LocationLink: "",
    BusinessName: "",
    Broucher: "VGhpcyBpcyBhDFGHhbXBsZSBicm9jaHVyZSBmaWxlLg==",
    Description: "",
    Country: "",
  };
  return (
    <div className="w-full h-screen  overflow-y-auto pt-24">
      <div className="w-full max-w-screen-xl px-4  h-fit  ">
        <Formik
          initialValues={initialValues}
          onSubmit={""}
          validationSchema={validationSchema}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form className="w-full h-fit px-4 ">
                {/* <EditForm /> */}

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
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default EditPage;
