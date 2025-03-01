import * as Yup from "yup";

export const LoginValidation = Yup.object({
    UserName: Yup.string()
      .test(
        "is-username-or-email",
        "Enter a valid email or username",
        (value) =>
          Yup.string().email().isValidSync(value) ||
          Yup.string().min(3).max(20).isValidSync(value)
      )
      .required("Email or Username is required"),
    Password: Yup.string()
    //   .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });