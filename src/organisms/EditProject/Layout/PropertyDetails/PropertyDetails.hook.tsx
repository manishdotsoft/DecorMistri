import { useFormik } from 'formik';
import { useState } from 'react';
import { propertyDetailsSchema } from '../../Schema';

interface PropertyDetailsFormProps {
  data: {
    size: string;
    phases: string;
    file: { name: string; size: number; type: string } | null;
    comments: string;
    designType: string;
    subcategories: string[];
  };
  updateData: (data: {
    size: string;
    phases: string;
    file: { name: string; size: number; type: string } | null;
    comments: string;
    designType: string;
    subcategories: string[];
  }) => void;
  handleNext: () => void;
}

const usePropertyDetailsForm = ({
  data,
  updateData,
  handleNext,
}: PropertyDetailsFormProps) => {
  const [fileError, setFileError] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      size: data.size || '',
      phases: data.phases || '',
      file: data.file || null,
      comments: data.comments || '',
      designType: data.designType || '',
      subcategories: data.subcategories || [],
    },
    validationSchema: propertyDetailsSchema,
    validateOnBlur: true,
    onSubmit: (values) => {
      const { file, ...rest } = values;
      const fileMetadata = file
        ? { name: file.name, size: file.size, type: file.type }
        : null;
      updateData({
        ...rest,
        file: fileMetadata, // Send only serializable metadata
      });
      handleNext();
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      formik.setFieldValue('file', file);
      setFileError(null); // Clear error if a file is selected
    } else {
      setFileError('Please select a file.');
    }
  };

  const isFormValid = () => {
    return (
      !!formik.values.size &&
      !!formik.values.phases &&
      !!formik.values.file &&
      !!formik.values.comments &&
      !!formik.values.designType &&
      formik.values.subcategories.length > 0 &&
      !Object.keys(formik.errors).length
    );
  };

  return {
    formik,
    handleFileChange,
    fileError,
    isFormValid,
  };
};

export default usePropertyDetailsForm;
