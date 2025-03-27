import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: theme.palette.text.primary,

  backgroundColor: theme.palette.background.paper,
}));

export const InputLabelItem = styled('label')(({ theme }) => ({
  fontFamily: theme?.typography?.fontFamily,
  fontSize: theme.typography?.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
  marginTop: '20px',
});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme?.typography?.fontFamily,
  fontSize: '12px',
  color: theme.palette.error.main,

  marginLeft: '15px',
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
  gridTemplateColumns: '1fr 0.51fr',

  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '1fr',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}));

export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));
//

export const InputIconFor = styled(Box)(() => ({
  position: 'relative',
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
