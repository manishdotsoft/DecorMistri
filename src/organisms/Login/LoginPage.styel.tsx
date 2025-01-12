import { styled } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const FullContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const MainContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-radius: 25px;
  height: 82vh;
  background-color: white;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const LeftContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  width: 40%;
`;

export const RightContainer = styled('div')`
  width: 50%;
`;

export const HeadlineSpan = styled('span')`
  font-weight: 600;
  color: black;
`;

export const LogoContainer = styled('div')`
  margin-bottom: 20px;

  .logo-image {
    height: 30px;
  }
`;

export const Title = styled('div')`
  font-size: 18px;
  color: #333;
`;

export const Highlight = styled('span')`
  color: #c7148a;
  font-weight: bold;
  font-size: 28px;
`;

export const ForgotPasswordLink = styled(RouterLink)`
  display: block;
  margin-top: 10px;
  text-align: right;
  color: #c7148a;
  text-decoration: none;
  font-size: 15px;
`;

export const ForgetPaswordContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  label {
    font-size: 18px;
    color: #000000;
    font-weight: 400;
  }

  input[type='checkbox'] {
    display: none;
  }

  input[type='checkbox'] + label {
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    font-size: 16px;
  }

  input[type='checkbox'] + label::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: white;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  input[type='checkbox']:checked + label::before {
    background-color: pink;
    border-color: pink;
  }

  input[type='checkbox']:checked + label::after {
    content: '✔';
    position: absolute;
    left: 4px;
    top: 0;
    font-size: 14px;
    color: #000000;
  }
`;

export const SignupContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 15px;
  font-size: 6px;
  color: #666;
  width: 100%;
  .signup-link {
    margin-left: 5px;
    font-size: 20px;
    color: #c7148a;
    text-decoration: none;
  }
`;

export const LoginImage = styled('img')`
  height: 100%;
  width: 650px;
  object-fit: cover;
`;

export const LoginLink = styled(RouterLink)`
  text-decoration: none;
`;
