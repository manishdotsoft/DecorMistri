import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeadlineSpan = styled('span')`
  font-weight: 600;
  color: black;
`;

export const Highlight = styled('span')`
  color: #c7148a;
  font-weight: 600;
  font-size: 28px;
  @media (max-width: 480px) {
    fontsize: '24px';
  }
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
  margin-top: 20px;
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
    marginTop: '35px',
  },
}));

export const MainFlex = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  // maxWidth: "1400px",
  backgroundColor: '#ffffff',
  borderRadius: '25px',
  boxShadow: '0px 0px 100px 10px rgba(0, 0, 0, 0.3)',

  overflow: 'hidden',
  // [theme.breakpoints.down("lg")]: {
  //   flexDirection: "column",
  //   maxWidth: "1200px",
  // },
  // [theme.breakpoints.down("md")]: {
  //   maxWidth: "700px",
  // },
  width: '80%',
  '@media(max-width: 1310px)': {
    flexDirection: 'column',

    width: '90%',
  },
  '@media(max-width: 1047px)': {
    flexDirection: 'column',
    padding: '16px',
    width: '97%',
  },

  '@media(max-width: 468px)': {
    width: '100%',
    boxShadow: 'none',
    padding: '0',
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

  '@media (max-width: 768px)': {
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  },

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

export const ImageBox = styled('div')(() => ({
  width: '50%',
  height: 'auto',

  '@media (max-width: 1300px)': {
    width: '100%',
  },
  '@media (max-width: 800px)': {
    width: '95%',
    padding: '18px',
    height: 'auto',
    borderTopLeftRadius: '20px',
    borderBottomLeftRadius: '20px',
  },
}));

export const TitleOne = styled(Typography)(() => ({
  fontSize: '28px',
  fontWeight: 300,

  '@media (max-width: 480px)': {
    fontSize: '24px',
  },
}));
export const TitleTwo = styled(Typography)(() => ({
  fontSize: '13px',
  '@media (max-width: 480px)': {
    fontSize: '12px',
  },
}));

export const LogoImage = styled('img')(() => ({
  height: '40px',
}));

export const Collaboration = styled(Typography)(() => ({
  fontSize: '28px',
  fontWeight: 300,
  '@media (max-width: 480px)': {
    fontSize: '24px',
  },
}));

export const ParentInputBox = styled('div')(() => ({
  marginRight: '49px',
  '@media (max-width: 480px)': {},
}));

export const ModalBox = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '400px',
  backgroundColor: 'white',

  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
  background: '#fff',
}));
export const ModalTitle = styled(Box)(() => ({
  color: '#1e1e1e',
  fontWeight: 700,
  fontSize: '20px',
  marginBottom: '20px',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
}));
