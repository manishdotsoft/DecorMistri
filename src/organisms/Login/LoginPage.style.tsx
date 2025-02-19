import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from './../../thems/primitives/theme';
import { BOX_SHADOW, DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';
import fonts from '../../thems/primitives/fonts';

export const SignupContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'row',
  gap: '10px',
  marginTop: '20px',
  fontSize: typeset.body1.fontSize,
  color: theme.palette.text.secondary,
  width: '100%',
  '.signup-link': {
    marginLeft: '5px',
    fontSize: typeset.body1.fontSize,
    color: theme.palette.primary.main,
    textDecoration: 'none',
  },
}));

export const LoginLink = styled(RouterLink)(() => ({
  textDecoration: 'none',
  color: theme.palette.primary.main,
  fontSize: theme.typography.body1.fontSize,
  '&:hover': {
    color: theme.palette.primary.dark,
  },
}));

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: fonts.primary,
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: palette.white.main,
  padding: '16px ',

  [theme.breakpoints.down('sm')]: {
    padding: '0px',
    marginTop: '35px',
  },
}));

export const MainFlex = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: fonts.primary,

  backgroundColor: palette.white.main,
  borderRadius: '25px',
  boxShadow: `0px 0px 100px 10px ${BOX_SHADOW}`,

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
export const StyledForm = styled('form')(() => ({
  fontFamily: fonts.primary,
}));

export const TextArea = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: fonts.primary,
  gap: '8px',
}));

export const TextArea2 = styled('div')(() => ({
  fontFamily: fonts.primary,
}));

export const ChildFlex = styled('div')(() => ({
  flex: 1,
  padding: '35px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  marginTop: 'auto',
  marginBottom: 'auto',
  fontFamily: fonts.primary,

  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '20px 16px',
  },
}));

export const HeadlineSpan = styled('span')(() => ({
  fontWeight: 600,
  color: theme.palette.text.primary,
  fontFamily: fonts.primary,
}));

export const Highlight = styled('span')(() => ({
  fontWeight: 600,
  color: DECOR_LOGO_COLOR,

  fontSize: typeset.A4.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.h5.fontSize,
  },
}));

export const ForgotPasswordLink = styled(RouterLink)(() => ({
  display: 'block',
  marginTop: '10px',
  textAlign: 'right',
  color: DECOR_LOGO_COLOR,
  textDecoration: 'none',
  fontSize: typeset.body2.fontSize,
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.subtitle2.fontSize,
  },
}));

export const ForgetPaswordContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '10px',
  marginBottom: '10px',
}));

export const ImageFlex = styled('div')(() => ({
  flex: 1,
  backgroundColor: theme.palette.background.default,
  width: '100%',
  height: '100%',
  borderRadius: '6px',
}));

export const AllImg = styled('img')(() => ({
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

export const StyledHeader = styled('div')(() => ({
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

export const Title = styled(Typography)(() => ({
  fontSize: typeset.h3.fontSize,
  fontWeight: 'bold',
  fontFamily: fonts.primary,

  color: theme.palette.text.primary,
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.h4.fontSize,
  },
}));

export const Title2 = styled(Typography)(() => ({
  fontSize: typeset.body2.fontSize,
  fontWeight: 'bold',
  fontFamily: fonts.primary,

  color: theme.palette.text.secondary,
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export const StyledTypography = styled('p')(() => ({
  fontSize: typeset.body2.fontSize,
  color: theme.palette.error.main,
  fontFamily: fonts.primary,
  marginTop: '10px',
}));

export const StyledBoxCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  marginTop: '10px',
}));

export const StyledLink = styled('span')(() => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  cursor: 'pointer',
  fontFamily: fonts.primary,

  textDecoration: 'none',
}));

export const ImageBox = styled('div')(() => ({
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

export const TitleOne = styled(Typography)(() => ({
  fontSize: typeset.A4.fontSize,
  fontWeight: 300,

  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.h5.fontSize,
  },
}));

export const TitleTwo = styled(Typography)(() => ({
  fontSize: typeset.subtitle2.fontSize,
  color: theme.palette.grey[500],

  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.caption.fontSize,
  },
}));

export const LogoImage = styled('img')(() => ({
  height: '40px',
}));

export const Collaboration = styled(Typography)(() => ({
  fontSize: typeset.A4.fontSize,
  fontWeight: 300,

  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.h5.fontSize,
  },
}));

export const ParentInputBox = styled('div')(() => ({
  // marginRight: '49px',
}));

export const ModalBox = styled(Box)(() => ({
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

export const ModalTitle = styled(Box)(() => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  fontSize: typeset.h6.fontSize,
  marginBottom: '20px',
}));

export const ModalButtons = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '20px',
}));

export const LinkSignup = styled(Typography)(() => ({
  color: DECOR_LOGO_COLOR,
  fontSize: typeset.body2.fontSize,
  textDecoration: 'none',
}));

export const ButtonWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '24px',
  gap: '20px',
});
