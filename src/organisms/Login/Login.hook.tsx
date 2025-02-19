import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { loginUserMutation } from '../../graphql/mutation/loginUser';
import { useNavigate } from 'react-router-dom';
import { AlertColor } from '@mui/material';

const initialValues = {
  email: '',
  password: '',
};

interface LoginFormValues {
  email: string;
  password: string;
}

export const useLoginLogic = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [message, setMessage] = useState<string>('');
  const [showToaster, setShowToaster] = useState<boolean>(false);
  const [severity, setSeverity] = useState<AlertColor>('info');
  const [openModal, setOpenModal] = useState(false);

  const handleClose = () => {
    setShowToaster(false);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    navigate('/dashboard');
  };

  const handleUpdateprofile = () => {
    setOpenModal(true);
    navigate('/updateProfile');
  };
  let token = '';
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      const response = await loginUserMutation({
        input: {
          email: values.email,
          password: values.password,
        },
      });

      if (response && response?.data?.loginUser?.token) {
        token = response?.data?.loginUser?.token;
        localStorage.setItem('authTocken', token);
        setMessage(response?.data?.loginUser?.message || 'Login successful!');
        setSeverity('success');
        setShowToaster(true);
        setOpenModal(true);
      } else {
        setSeverity('warning');
        setMessage(
          response?.data?.loginUser?.message || 'Invalid credentials.'
        );
        setShowToaster(true);
      }
    } catch (err) {
      console.error(err);
      setSeverity('error');
      setMessage('An error occurred while logging in. Please try again.');
      setShowToaster(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/dashboard');
    }
  }, [token, navigate]);

  return {
    dispatch,
    initialValues,
    handleSubmit,
    message,
    showToaster,
    handleClose,
    severity,
    openModal,
    handleModalClose,
    handleUpdateprofile,
  };
};
