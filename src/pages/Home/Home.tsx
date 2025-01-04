import LoginPage from '../Login/Login';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem('authToken'));

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/myprofile');
    }
  }, [isAuthenticated, navigate]);

  return <div>{!isAuthenticated && <LoginPage />}</div>;
};

export default Home;
