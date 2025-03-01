import { useState } from 'react';
import { FormikHelpers, useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setSignUpData } from '../../store/reducers/signUpSlice';
import { signUpSchema } from './SchemasSignup';
import { createUserMutation } from '../../graphql/mutation/createUser';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

export interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const initialValues: SignUpFormValues = {
  name: '',
  email: '',
  password: '',
  phone: '',
};

export const useSignUp = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [toasterOpen, setToasterOpen] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleSubmit = async (
    values: SignUpFormValues,
    actions: FormikHelpers<SignUpFormValues>
  ) => {
    try {
      dispatch(setSignUpData(values));
      const response = await createUserMutation({
        input: {
          full_name: values.name,
          email: values.email,
          password: values.password,
          phone: values.phone,
        },
      });
      if (response.data) {
        setToasterOpen(true);
        actions.resetForm();
        setTimeout(() => navigate('/success'), 2000);
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
    validationSchema: signUpSchema,
    onSubmit: handleSubmit,
  });

  const handleCloseToaster = () => {
    setToasterOpen(false);
  };

  const isAnyFieldEmpty = Object.values(formik.values).some(
    (value) => typeof value === 'string' && value.trim() === ''
  );

  const calculatePasswordStrength = (password: string): number => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const getStrengthLabel = (strength: number) => {
    switch (strength) {
      case 1:
        return { label: 'Weak', color: DECOR_LOGO_COLOR };
      case 2:
        return { label: 'Fair', color: DECOR_LOGO_COLOR };
      case 3:
        return { label: 'Good', color: DECOR_LOGO_COLOR };
      case 4:
        return { label: 'Strong', color: DECOR_LOGO_COLOR };
      default:
        return { label: 'Very Weak', color: DECOR_LOGO_COLOR };
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    formik.handleChange(e);
    const strength = calculatePasswordStrength(value);
    setPasswordStrength(strength);
  };

  const { label } = getStrengthLabel(passwordStrength);

  return {
    formik,
    toasterOpen,
    handleCloseToaster,
    isAnyFieldEmpty,
    passwordStrength,
    handlePasswordChange,
    label,
    getStrengthLabel,
  };
};
