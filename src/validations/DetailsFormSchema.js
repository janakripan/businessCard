import * as Yup from 'yup'



export const validationSchema = Yup.object({
  userName: Yup.string().required("Name is required"),
  job: Yup.string().required("Job name is required"),
  email: Yup.string().required("E-mail is required").email("Invalid E-mail"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  whatsAppNumber: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("WhatsApp number is required"),
  locationLink: Yup.string()
    .url("Must be a valid URL")
    .matches(
      /^(https?:\/\/)?(www\.)?(google\.com\/maps|goo\.gl\/maps|maps\.app\.goo\.gl)/,
      "Must be a valid Google Maps link or shared location"
    )
    .required("Location link is required"),
  businessName: Yup.string().required("Business name is required"),
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
    .min(1, "At least one file is required")
    .max(3, "You can upload up to 3 files only"),
  about: Yup.string().required("Brief is required"),
  country: Yup.string()
    .required("Country is required")
    .notOneOf([""], "Please select a valid country"),
  gender: Yup.string().required("Gender is required"),
});