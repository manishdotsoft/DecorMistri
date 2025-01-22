import * as Yup from "yup";

export const updateProfileSchema = Yup.object({
  businessName: Yup.string()
    .min(2, "Business name must be at least 2 characters")
    .max(25, "Business name cannot exceed 25 characters")
    .required("Business name is required"),
  professionalCategory: Yup.string().required("Please select a design type"),
  designTypeExpertise: Yup.string().required("Please select a design type"),
  styleTypeExpertise: Yup.string().required("Please select a design type"),
  state: Yup.string().required("Please select a design type"),
  city: Yup.string().required("Please select a design type"),
  location: Yup.string().required("Please select a design type"),
  // subcategories: Yup.array()
  //   .of(Yup.string())
  //   .min(1, "Please select at least one subcategory")
  //   .required("Subcategories are required"),
});
