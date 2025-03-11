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

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});

export const InputLabelItem = styled('label')(({ theme }) => ({
  fontFamily: theme?.typography?.fontFamily,
  fontSize: theme.typography?.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const SelectFile = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3px',
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

export const GridContainer2 = styled(Box)(({ theme }) => ({
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

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.caption.fontSize,
  color: theme.palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));
export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const SelectFileParent = styled(Box)(() => ({}));
export const SelectSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '18px 16px',
  width: '91%',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '6px',
  cursor: 'pointer',
  '&:hover': {
    border: `2px solid ${theme.palette.decor.main}`,
  },
}));

export const FileText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography?.overline.fontSize,
  color: theme.palette.grey[700],
}));

export const TextArea = styled('textarea')(({ theme }) => ({
  width: '100%',
  borderRadius: '6px',
  height: '120px',
  borderColor: `${theme.palette.grey[300]} !important`,
  outline: 'none',
  // transition: 'border-color 0.3s ease',
  outlineColor: 'none',
  '&:focus': {
    border: `2px solid ${theme.palette.decor.main} !important`,
  },
}));
