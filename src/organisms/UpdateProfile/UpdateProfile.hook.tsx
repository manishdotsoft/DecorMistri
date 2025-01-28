import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setUpdateProfile } from '../../store/reducers/updateProfileSlice';
import { updateProfileSchema } from './SchemasUpdateProfile';
import { createUserMutation } from '../../graphql/mutation/createUser';

export interface SignUpFormValues {
  businessName: string;
  professionalCategory: string;
  designTypeExpertise: string;
  styleTypeExpertise: string;
  state: string;
  city: string;
  location: string;
}

const initialValues: SignUpFormValues = {
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

  const handleSubmit = async (values: SignUpFormValues, actions: any) => {
    try {
      dispatch(setUpdateProfile(values));
      const response = await createUserMutation({
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

  const formik = useFormik<SignUpFormValues>({
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
