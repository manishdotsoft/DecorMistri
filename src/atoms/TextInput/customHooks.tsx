import { useState } from 'react';

const useEmailValidation = () => {
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    if (email === '') {
      setError('');
    } else {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      setError(!emailPattern.test(email) ? 'Invalid email format' : '');
    }
  };

  return { error, validateEmail };
};

export default useEmailValidation;
