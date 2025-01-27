import { useFormik } from "formik";
import { projectProviderSchema } from "../../Schema";

interface ProjectProviderData {
  projectNumber: string;
  dateOfIssue: Date | string | null;
  designerName: string;
  email: string;
  phoneNumber: string;
  website?: string;
  addressLine1: string;
  addressLine2?: string;
  zipCode: string;
  city: string;
  country: string;
  state: string;
}

interface UseProjectProviderFormProps {
  data: ProjectProviderData;
  updateData: (values: ProjectProviderData) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

export const useProjectProviderForm = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: UseProjectProviderFormProps) => {
  const formik = useFormik({
    initialValues: {
      projectNumber: data.projectNumber || "",
      dateOfIssue: data.dateOfIssue ? new Date(data.dateOfIssue) : null, // Convert ISO string to Date
      designerName: data.designerName || "",
      email: data.email || "",
      phoneNumber: data.phoneNumber || "",
      website: data.website || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
      zipCode: data.zipCode || "",
      city: data.city || "",
      country: data.country || "",
      state: data.state || "",
    },
    validationSchema: projectProviderSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData({
        ...values,
        dateOfIssue: values.dateOfIssue
          ? values.dateOfIssue.toISOString()
          : null, // Convert Date to ISO string
      });
      handleNext();
      console.log(values);
    },
  });

  const isFormValid = () => {
    return (
      formik.values.projectNumber &&
      formik.values.dateOfIssue &&
      formik.values.email &&
      formik.values.city &&
      formik.values.country &&
      formik.values.state &&
      formik.values.zipCode &&
      formik.values.addressLine1 &&
      formik.values.designerName &&
      formik.values.phoneNumber
    );
  };

  return {
    formik,
    isFormValid,
    handlePrevious,
    handleNext,
  };
};
