import { useFormik } from "formik";
import { clientDetailsSchema } from "../../Schema";

interface ClientDetailsProps {
  data: {
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
  };
  updateData: (data: {
    clientName: string;
    clientEmail: string;
    phoneNumber: string;
    city: string;
    country: string;
    state: string;
    zipCode: string;
    addressLine1: string;
    addressLine2?: string;
  }) => void;
  handleNext: () => void;
  handlePrevious: () => void;
}

const useClientDetailsForm = ({
  data,
  updateData,
  handleNext,
  handlePrevious,
}: ClientDetailsProps) => {
  const formik = useFormik({
    initialValues: {
      clientName: data.clientName || "",
      clientEmail: data.clientEmail || "",
      phoneNumber: data.phoneNumber || "",
      city: data.city || "",
      country: data.country || "",
      state: data.state || "",
      zipCode: data.zipCode || "",
      addressLine1: data.addressLine1 || "",
      addressLine2: data.addressLine2 || "",
    },
    validationSchema: clientDetailsSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      handleNext();
      console.log(values);
    },
  });

  const isFormValid = () => {
    return (
      formik.values.clientName &&
      formik.values.clientEmail &&
      formik.values.phoneNumber &&
      formik.values.city &&
      formik.values.country &&
      formik.values.state &&
      formik.values.zipCode &&
      formik.values.addressLine1
    );
  };

  return {
    formik,
    isFormValid,
    handlePrevious,
  };
};

export default useClientDetailsForm;
