import { Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../thems/primitives/theme';
import { BOX_SHADOW, DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';
import fonts from '../../thems/primitives/fonts';
import typeset from '../../thems/primitives/typeset';

export const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  fontFamily: fonts.primary,
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: palette.white.main,
  padding: '16px',
  '@media(max-width: 468px)': {
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
  fontFamily: fonts.primary,
}));

export const ParentInputBox = styled('div')(() => ({
  fontFamily: fonts.primary,
  // marginRight: '49px',
  '@media(max-width: 468px)': {},
}));

export const TextArea = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  fontFamily: fonts.primary,

  gap: '10px',
}));

export const ChildFlex = styled('div')(({ theme }) => ({
  flex: 1,
  padding: '35px 100px',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  fontFamily: fonts.primary,
  height: '100%',
  [theme.breakpoints.down('md')]: {
    padding: '20px 16px',
  },
}));

export const SignUpImageBox = styled('div')(() => ({
  width: '50%',
  height: 'auto',

  '@media(max-width: 468px)': {
    display: 'none',
  },
  '@media(max-width: 1338px)': {
    width: '100%',
  },
}));

export const AllImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('lg')]: {
    width: '95%',
    margin: '0 auto',
    padding: '18px',
  },
}));

export const StyledHeader = styled('div')(() => ({
  marginBottom: '20px',
  fontFamily: fonts.primary,
}));

export const Title = styled(Typography)(() => ({
  fontSize: typeset.h4.fontSize,
  fontWeight: '300',
  fontFamily: fonts.primary,
  margin: '0',
  '@media(max-width: 1068px)': {
    fontSize: typeset.h5.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: typeset.button.fontSize,
  fontWeight: '300',
  color: palette.rateSheduleColors.colorB,
  fontFamily: fonts.primary,
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.caption.fontSize,
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: typeset.caption.fontSize,
  color: palette.error.main,
  fontFamily: fonts.primary,
}));

export const StyledBoxCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: fonts.primary,
  gap: '10px',
  marginTop: '20px',
}));

export const ProgressBar1 = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  width: '100%',
  marginTop: '3px',
}));

export const ProgressBar = styled('div')(() => ({
  display: 'flex',

  gap: '5px',
  width: '80%',
}));

export const PasswordError = styled('div')(() => ({
  width: '100%',
}));

export const LogoImage = styled('img')(() => ({
  height: '50px',
}));

export const DividerLine = styled(Divider)(() => ({
  margin: '10px 0',
  color: theme.palette.text.primary,
}));
export const StrengthText = styled(Typography)(() => ({
  color: theme.palette.grey[600],
  fontFamily: theme.typography.fontFamily,
  marginTop: '10px',

  display: 'flex',
  justifyContent: 'flex-end',
}));

export const HaveAccount1 = styled(Typography)(() => ({
  textAlign: 'center',
  fontWeight: '600',
  color: theme.palette.grey[700],
}));

export const HaveAccount2 = styled(Typography)(() => ({
  color: DECOR_LOGO_COLOR,
  // fontSize: "14px",
  fontSize: typeset.button.fontSize,
  textDecoration: 'none',
}));
