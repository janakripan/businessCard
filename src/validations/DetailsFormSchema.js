import * as Yup from 'yup'



export const validationSchema = Yup.object({
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
  country: Yup.string()
      .required("Country is required")
      .notOneOf([""], "Please select a valid country"),
  gender: Yup.string().required("Gender is required"),


})
