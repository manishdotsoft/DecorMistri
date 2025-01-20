import * as Yup from "yup";

export const updateProfileSchema = Yup.object({
  businessName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
});
