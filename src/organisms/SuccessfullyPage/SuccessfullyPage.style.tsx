import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: 'sans-serif',
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: '#ffffff',
  padding: '16px',

  // width: "100%",

  // flexDirection: "column",
  '@media(max-width: 468px)': {
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

export const ChildFlex = styled('div')(({ theme }) => ({
  flex: 1,
  padding: '35px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
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
}));

export const Logo = styled('img')(() => ({
  marginBottom: '20px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2.1rem',
  fontWeight: '300',
  color: '#000000',
  lineHeight: '30px',
  marginBottom: '10px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '32px',
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: '300',
  color: '#363636',
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));
