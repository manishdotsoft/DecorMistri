import { useDispatch } from 'react-redux';
import { setEmail } from '../../../store/reducers/loginSlice';
import { AppDispatch } from '../../../store/store';
import { useNavigate } from 'react-router-dom';

export const useForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (values: { email: string }) => {
    dispatch(setEmail(values.email));
    navigate('/newpassword');
    localStorage.setItem('authToken', 'your-auth-token');
  };

  return { handleSubmit };
};
