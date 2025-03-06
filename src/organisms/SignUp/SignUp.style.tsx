import { Divider, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '92vh',
  backgroundColor: theme.palette.white.main,
  padding: '16px',
  '@media(max-width: 468px)': {
    padding: '0px',
    marginTop: '35px',
  },
}));

export const MainFlex = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',

  backgroundColor: theme.palette.white.main,
  borderRadius: '25px',
  boxShadow: `0px 0px 100px 10px ${theme.palette.black[500]}`,

  overflow: 'hidden',
  width: '90%',

  [theme.breakpoints.down('xl')]: {
    // flexDirection: 'column',
    width: '95%',
  },

  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    width: '100%',
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

export const ParentInputBox = styled('div')(() => ({}));

export const TextArea = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',

  gap: '10px',
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

export const SignUpImageBox = styled('div')(({ theme }) => ({
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

export const AllImg = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',

  [theme.breakpoints.down('lg')]: {
    width: '95%',
    margin: '0 auto',
    padding: '18px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const StyledHeader = styled('div')(() => ({
  marginBottom: '20px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: '300',
  margin: '0',
  '@media(max-width: 1068px)': {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.button.fontSize,
  fontWeight: '300',
  color: theme.palette.rateSheduleColors.colorB,
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  color: theme.palette.error.main,
}));

export const StyledBoxCenter = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

export const DividerLine = styled(Divider)(({ theme }) => ({
  margin: '10px 0',
  color: theme.palette.text.primary,
}));
export const StrengthText = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[600],
  fontFamily: theme.typography.fontFamily,
  marginTop: '10px',

  display: 'flex',
  justifyContent: 'flex-end',
}));

export const HaveAccount1 = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  fontWeight: '600',
  color: theme.palette.grey[700],
}));

export const HaveAccount2 = styled(Typography)(({ theme }) => ({
  color: theme.palette.decor.main,
  // fontSize: "14px",
  fontSize: theme.typography.button.fontSize,
  textDecoration: 'none',
}));
