import { Typography, styled } from '@mui/material';
import { Box } from '@mui/system';

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
  padding: '35px 60px',
  display: 'flex',
  marginBottom: 'auto',
  flexDirection: 'column',
  overflow: 'hidden',
  height: '100%',
  marginTop: 'auto',
  [theme.breakpoints.down('md')]: {
    padding: '20px 16px',
  },
}));

export const ImageFlex = styled('div')(() => ({
  width: '50%',
  height: 'auto',

  '@media(max-width: 468px)': {
    display: 'none',
  },
  '@media(max-width: 1338px)': {
    width: '100%',
  },
}));

export const ButtonSectoLoginpage = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  marginLeft: '60px',
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
  marginBottom: '10px',
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.A4.fontSize,
  fontWeight: '400',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h5.fontSize,
  },
}));

export const Title2 = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  width: '80%',
  fontWeight: '300',
  color: theme.palette.black[200],
  margin: '0',
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));
