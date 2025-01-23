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
    /^(https?:\/\/)?(www\.)?(google\.com\/maps|goo\.gl\/maps|maps\.app\.goo\.gl)/,
    "Must be a valid Google Maps link or shared location"
  )
  .required("Location link is required"),
  businessName: Yup.string().required("business name is requiired"),
  broucher: Yup.array()
  .of(
    Yup.mixed().test(
      "fileType",
      "Unsupported file format. Only JPG, PNG, and PDF are allowed.",
      (value) => {
        if (!value) return false; // Ensure no empty file is uploaded
        return ["image/jpeg", "image/png", "application/pdf"].includes(value.type);
      }
    )
  )
  .test(
    "fileCount",
    "You can upload up to 3 files only.",
    (files) => !files || files.length <= 3
  ),
  about: Yup.string().required("brief is required"),
  country: Yup.string()
      .required("Country is required")
      .notOneOf([""], "Please select a valid country"),
  gender: Yup.string().required("Gender is required"),


})
