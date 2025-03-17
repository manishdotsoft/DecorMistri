import { Card, CardContent, Box, Typography, styled } from '@mui/material';

export const CountProjectsMainSec = styled(Box)(({ theme }) => ({
  display: 'flex',
  // flexWrap: 'wrap',
  gap: '10px',

  [theme.breakpoints.down('xl')]: {
    overflowX: 'scroll',
    paddingBottom: '10px',
    /* Scrollbar styles */
    '&::-webkit-scrollbar': {
      height: '6px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey[300],
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.decor.main,
      borderRadius: '10px',
    },
    // '&::-webkit-scrollbar-thumb:hover': {
    //   background: theme.palette.decor.main,
    // },
  },
}));

export const CardMain = styled(Card)(({ theme }) => ({
  borderRadius: '5px',
  overflow: 'hidden',
  minWidth: 206,

  flex: '1 1 200px',
  height: 'fit-content',
  boxShadow: 'none !important',
  border: `1px solid ${theme.palette.grey.borderColor}`,
}));

export const ColorBox = styled(Box)<{ color?: string }>(
  ({ theme, color = theme.palette.primary.contrastText }) => ({
    height: 5,
    backgroundColor: color,
  })
);

export const CardChild = styled(CardContent)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 10px !important',
  gap: '5px',
  boxShadow: 'none !important',
}));

export const CardFirst = styled(Box)(() => ({}));
export const CardSecond = styled(Box)(() => ({}));
export const LabelTypography = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.overline.fontSize}px`,

  fontWeight: '600',
  color: `${theme.palette.grey[500]}`,
}));

export const ValueTypography = styled(Typography)(({ theme }) => ({
  fontSize: `${theme.typography.body1.fontSize}px`,
  fontWeight: '700',
}));
