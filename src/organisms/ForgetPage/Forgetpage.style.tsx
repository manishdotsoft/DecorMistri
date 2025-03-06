import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SignupContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '10px',
  marginTop: '20px',
  fontSize: theme.typography?.body1.fontSize,
  color: theme.palette.text.secondary,
  width: '100%',
  '.signup-link': {
    marginLeft: '5px',
    fontSize: theme.typography?.body1.fontSize,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

export const LoginLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  minHeight: '92vh',
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.white.main,
  padding: '20px',
  color: theme.palette.text.primary,

  [theme.breakpoints.down('sm')]: {
    padding: '0',
    marginTop: '40px',
  },
}));

export const MainFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: theme.typography.fontFamily,
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  boxShadow: `0px 0px 100px 10px ${theme.palette.grey[300]}`,
  overflow: 'hidden',

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',

    width: '90%',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    padding: '16px',
    width: '97%',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    boxShadow: 'none',
    padding: '0',
  },
}));

export const StyledForm = styled('form')(() => ({}));

export const TextArea = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  gap: '8px',
}));

export const TextArea2 = styled('div')(() => ({}));

export const ChildFlex = styled('div')(({ theme }) => ({
  flex: 1,
  padding: '35px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  marginTop: 'auto',
  marginBottom: 'auto',

  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '20px 16px',
  },
}));

export const HeadlineSpan = styled('span')(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
}));

export const Highlight = styled('span')(({ theme }) => ({
  fontWeight: 600,
  color: theme.palette.decor.main,

  fontSize: theme.typography?.A4.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.h5.fontSize,
  },
}));

export const ForgotPasswordLink = styled(RouterLink)(({ theme }) => ({
  display: 'block',
  marginTop: '10px',
  textAlign: 'right',
  color: theme.palette.decor.main,
  textDecoration: 'none',
  fontSize: theme.typography?.body2.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.subtitle2.fontSize,
  },
}));

export const ForgetPaswordContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
  marginBottom: '10px',
}));

export const ImageFlex = styled('div')(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
  width: '100%',
  height: '100%',
  borderRadius: '6px',
}));

export const AllImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('md')]: {
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px',
  },

  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledHeader = styled('div')(({ theme }) => ({
  marginBottom: '10px',
  color: theme.palette.text.primary,
}));

export const Logo = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '10px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.h3.fontSize,
  fontWeight: 'bold',

  color: theme.palette.text.primary,
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.h4.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.body2.fontSize,
  fontWeight: 'bold',

  color: theme.palette.text.secondary,
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const StyledTypography = styled('p')(({ theme }) => ({
  fontSize: theme.typography?.body2.fontSize,
  color: theme.palette.error.main,

  marginTop: '10px',
}));

export const StyledBoxCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  marginTop: '10px',
}));

export const StyledLink = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',

  textDecoration: 'none',
}));

export const ImageBox = styled('div')(({ theme }) => ({
  width: '50%',
  height: 'auto',

  [theme.breakpoints.down('lg')]: {
    width: '100%',
  },
  [theme.breakpoints.down('md')]: {
    width: '95%',
    padding: '20px',
    height: 'auto',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  },
}));

export const TitleOne = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.A4.fontSize,
  fontWeight: 300,

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.h5.fontSize,
  },
}));

export const TitleTwo = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.body1.fontSize,

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.body2.fontSize,
  },
}));

export const LogoImage = styled('img')(() => ({
  height: '40px',
}));

export const Collaboration = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.A4.fontSize,
  fontWeight: 300,

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography?.h5.fontSize,
  },
}));

export const ParentInputBox = styled('div')(() => ({
  marginRight: '49px',
}));

export const ModalBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  maxWidth: '400px',
  backgroundColor: theme.palette.background.paper,

  borderRadius: '8px',
  padding: '20px',
  textAlign: 'center',
}));

export const ModalTitle = styled(Box)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: theme.typography?.h6.fontSize,
  marginBottom: '20px',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
}));

export const LinkSignup = styled(Typography)(({ theme }) => ({
  color: theme.palette.decor.main,
  fontSize: theme.typography?.body1.fontSize,
  textDecoration: 'none',
}));
