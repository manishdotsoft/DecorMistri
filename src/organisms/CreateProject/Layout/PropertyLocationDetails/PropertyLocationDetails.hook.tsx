import { useCallback } from 'react';
import { useFormik } from 'formik';
import { propertyLocationSchema } from '../../Schema';

interface PropertyLocationData {
  country?: string;
  state?: string;
  city?: string;
  zip?: string;
  addressLine1?: string;
  addressLine2?: string;
}

interface UsePropertyLocationDetailsProps {
  data: PropertyLocationData;
  updateData: (data: PropertyLocationData) => void;
  handleNext: () => void;
}

const usePropertyLocationDetails = ({
  data,
  updateData,
  handleNext,
}: UsePropertyLocationDetailsProps) => {
  const formik = useFormik({
    initialValues: {
      country: data.country || '',
      state: data.state || '',
      city: data.city || '',
      zip: data.zip || '',
      addressLine1: data.addressLine1 || '',
      addressLine2: data.addressLine2 || '',
    },
    validationSchema: propertyLocationSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      console.log(values);
      handleNext();
    },
  });

  const isFormValid = useCallback(() => {
    return (
      formik.values.country &&
      formik.values.state &&
      formik.values.city &&
      formik.values.zip.trim() &&
      formik.values.addressLine1.trim()
    );
  }, [formik.values]);

  return {
    formik,
    isFormValid,
  };
};

export default usePropertyLocationDetails;
