import { useState } from 'react';

const usePasswordVisibility = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return {
    isPasswordVisible,
    togglePasswordVisibility,
  };
};

export default usePasswordVisibility;
