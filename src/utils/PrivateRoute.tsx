import { JSX } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem('authToken');
  if (!token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
