import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';

export const Container = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
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
});

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
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

export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));
