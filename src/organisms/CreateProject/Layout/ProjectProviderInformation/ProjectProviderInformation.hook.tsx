import { useFormik } from 'formik';
import { projectProviderSchema } from '../../Schema';

interface ProjectProviderData {
  projectNumber: string;
  dateOfIssue: Date | string | null;
  designerName: string;
  email: string;
  phoneNumber: string;
  website?: string;
  addressLine1: string;

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
      projectNumber: data.projectNumber || '',
      dateOfIssue: data.dateOfIssue ? new Date(data.dateOfIssue) : null,
      designerName: data.designerName || '',
      email: data.email || '',
      phoneNumber: data.phoneNumber || '',
      website: data.website || '',
      addressLine1: data.addressLine1 || '',

      state: data.state || '',
    },
    validationSchema: projectProviderSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      updateData({
        ...values,
        dateOfIssue:
          values.dateOfIssue instanceof Date
            ? values.dateOfIssue.toISOString()
            : null,
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
      formik.values.state &&
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
