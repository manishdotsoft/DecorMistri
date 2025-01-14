import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your first name"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .required("Please enter your phone number"),
});
