import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeadlineSpan = styled('span')`
  font-weight: 600;
  color: black;
`;

export const Highlight = styled('span')`
  color: #c7148a;
  font-weight: 600;
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
  gap: 10px;
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

export const LoginLink = styled(RouterLink)`
  text-decoration: none;
`;

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: '#ffffff',
  padding: '16px',
  '@media (max-width: 468px)': {
    padding: '0px',
  },
}));

export const MainFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'sans-serif',

  maxWidth: '1400px',
  backgroundColor: '#ffffff',
  borderRadius: '25px',
  boxShadow: '0px 0px 100px 10px rgba(0, 0, 0, 0.3)',
  width: '100%',
  overflow: 'hidden',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    maxWidth: '1200px',
  },
  [theme.breakpoints.down('md')]: {
    maxWidth: '700px',
  },
  '@media (max-width: 468px)': {
    boxShadow: 'none',
  },
}));

export const StyledForm = styled('form')(() => ({
  fontFamily: 'sans-serif',
}));

export const TextArea = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'sans-serif',

  gap: '10px',
}));

export const TextArea2 = styled('div')(() => ({
  fontFamily: 'sans-serif',
}));

export const ChildFlex = styled('div')(({ theme }) => ({
  flex: 1,
  padding: '35px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: 'sans-serif',

  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '20px 16px',
  },
}));

export const ImageFlex = styled('div')(() => ({
  flex: 1,
  backgroundColor: '#f7f7f7',
  width: '100%',
  height: '100%',
  fontFamily: 'sans-serif',

  borderRadius: '25px',
}));

export const AllImg = styled('img')(() => ({
  width: '100%',
  height: '100%',

  '@media (max-width: 768px)': {},

  '@media (max-width: 480px)': {
    display: 'none',
  },
}));

export const StyledHeader = styled('div')(() => ({
  marginBottom: '20px',
  fontFamily: 'sans-serif',
}));

export const Logo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '10px',
  fontFamily: 'sans-serif',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '44px',
  fontWeight: '300',
  fontFamily: 'sans-serif',

  color: '#000000',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '300',
  fontFamily: 'sans-serif',

  color: '#363636',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const StyledTypography = styled('p')(() => ({
  fontSize: '12px',
  color: '#d32f2f',
  fontFamily: 'sans-serif',

  marginTop: '5px',
}));

export const StyledBoxCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'sans-serif',
  gap: '10px',
  marginTop: '20px',
}));

export const StyledLink = styled('span')(() => ({
  color: '#7d22c3',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: 'sans-serif',

  textDecoration: 'none',
}));
