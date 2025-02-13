import * as Yup from 'yup'



export const validationSchema = Yup.object({
  FullName: Yup.string().required("Name is required"),
  Profession: Yup.string().required("Job name is required"),
  Email: Yup.string().required("E-mail is required").email("Invalid E-mail"),
  PhoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  WhatsappNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("WhatsApp number is required"),
  LocationLink: Yup.string()
    .url("Must be a valid URL")
    .matches(
      /^(https?:\/\/)?(www\.)?(google\.com\/maps|goo\.gl\/maps|maps\.app\.goo\.gl)/,
      "Must be a valid Google Maps link or shared location"
    )
    .required("Location link is required"),
  BusinessName: Yup.string().required("Business name is required"),
  // Broucher: Yup.array()
  //   .of(
  //     Yup.mixed().test(
  //       "fileType",
  //       "Unsupported file format. Only JPG, PNG, and PDF are allowed.",
  //       (value) => {
  //         if (!value) return false; // Ensure no empty file is uploaded
  //         return ["image/jpeg", "image/png", "application/pdf"].includes(value.type);
  //       }
  //     )
  //   )
  //   .min(1, "At least one file is required")
  //   .max(3, "You can upload up to 3 files only"),
  Description: Yup.string().required("Brief is required"),
  Country: Yup.string()
    .required("Country is required")
    .notOneOf([""], "Please select a valid country"),
  // gender: Yup.string().required("Gender is required"),
});