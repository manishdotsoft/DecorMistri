import { useFormik } from 'formik';
import { useEffect, useCallback } from 'react';
import { financialDetailsSchema } from '../../Schema';

interface FinancialDetailsData {
  paymentReceived?: string | null;
  estimatedBudget?: string;
}

interface UseFinancialDetailsProps {
  data: FinancialDetailsData;
  updateData: (data: FinancialDetailsData) => void;
  handleNext: () => void;
}

const useFinancialDetails = ({
  data,
  updateData,
  handleNext,
}: UseFinancialDetailsProps) => {
  const formik = useFormik({
    initialValues: {
      estimatedBudget: data.estimatedBudget || '',
      paymentReceived: data.paymentReceived || '',
    },
    validationSchema: financialDetailsSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData(values);
      console.log(values);
      handleNext();
    },
  });

  const isFormValid = useCallback(() => {
    return formik.isValid && formik.dirty;
  }, [formik.isValid, formik.dirty]);

  useEffect(() => {
    updateData(formik.values);
  }, [formik.values, updateData]);

  return {
    formik,
    isFormValid,
  };
};

export default useFinancialDetails;
