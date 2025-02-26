import * as Yup from "yup";

export const SignupValidation = Yup.object({
    Email: Yup.string().email("Invalid email").required("Email is required"),
    Password: Yup.string().min(8, "Password must be at least 6 characters").required("Password is required"),
    ConfirmPassword: Yup.string()
      .oneOf([Yup.ref("Password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });