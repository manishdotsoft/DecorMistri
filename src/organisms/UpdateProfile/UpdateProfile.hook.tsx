import { useEffect, useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setUpdateProfile } from '../../store/reducers/updateProfileSlice';
import { updateProfileSchema } from './SchemasUpdateProfile';
import { updateProfileMutation } from '../../graphql/mutation/updateProfile';

export interface UpdateProfileFormValues {
  businessName: string;
  professionalCategory: string;
  designTypeExpertise: string;
  styleTypeExpertise: string;
  state: string;
  city: string;
  location: string;
}

const initialValues: UpdateProfileFormValues = {
  businessName: '',
  professionalCategory: '',
  designTypeExpertise: '',
  styleTypeExpertise: '',

  state: '',
  city: '',

  location: '',
};

export const useUpdateProfile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [toasterOpen, setToasterOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (
    values: UpdateProfileFormValues,
    actions: FormikHelpers<UpdateProfileFormValues>
  ) => {
    try {
      dispatch(setUpdateProfile(values));
      const response = await updateProfileMutation({
        input: {
          businessName: values.businessName,
          professionalCategory: values.professionalCategory,
          designTypeExpertise: values.designTypeExpertise,
          styleTypeExpertise: values.styleTypeExpertise,
          state: values.state,
          city: values.city,
          location: values.location,
        },
      });
      if (response.data) {
        setToasterOpen(true);
        actions.resetForm();
        navigate('/success');
      } else if (response.error) {
        console.error('Error creating user:', response.error);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      actions.setSubmitting(false);
    }
  };

  const formik = useFormik<UpdateProfileFormValues>({
    initialValues,
    validationSchema: updateProfileSchema,
    onSubmit: handleSubmit,
  });

  const handleCloseToaster = () => {
    setToasterOpen(false);
  };

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => typeof value === 'string' && value.trim() === ''
  );
  useEffect(() => {
    const totalFields = Object.keys(initialValues).length;
    const filledFields = Object.values(formik.values).filter(
      (value) => typeof value === 'string' && value.trim() !== ''
    ).length;
    setProgress(Math.round((filledFields / totalFields) * 100));
  }, [formik.values]);

  return {
    formik,
    toasterOpen,
    handleCloseToaster,
    isAnyFieldEmpty,
    progress,
  };
};
