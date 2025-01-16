import { useDispatch } from 'react-redux';
import { setLoginData } from '../../../store/reducers/loginSlice';
import { AppDispatch } from '../../../store/store';

export const useForgetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: { email: string }, resetForm: () => void) => {
    dispatch(setLoginData(values));
    localStorage.setItem('authToken', 'your-auth-token');
    resetForm();
  };

  return { handleSubmit };
};
