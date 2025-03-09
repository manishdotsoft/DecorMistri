import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: ' 0px auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: theme.palette.text.primary,

  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: '14px',
  borderTopRightRadius: '14px',
  boxShadow: theme.palette.black[500],
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const GridContainer2 = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '0.98fr 2fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr 1fr',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '12px',
  color: theme.palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});

export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const InputLabelItem = styled('label')(({ theme }) => ({
  fontSize: theme.typography?.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const InputIconFor = styled(Box)(() => ({
  position: 'relative',
}));

export const WebsiteIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 18,
}));

export const EmailIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 20,
}));

export const LocationIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 16,
}));
