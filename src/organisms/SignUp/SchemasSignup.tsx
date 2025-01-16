import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your first name"),

  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),
  phone: Yup.string()
    .matches(
      /^[6-9]\d{9}$/,
      "Phone number must start with 6, 7, 8, or 9 and be 10 digits long"
    )
    .min(6, "Phone number must be at least 6 digits")
    .max(10, "Phone number maximum put 10 digits")
    .length(10, "Phone number must be exactly 10 digits")
    .required("Please enter your phone number"),
});
