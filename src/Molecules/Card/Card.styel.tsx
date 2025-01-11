import { styled, Typography } from '@mui/material';

export const Button = styled('button')({
  height: '20px',
  width: '20px',
});

export const CardContainer = styled('div')({
  marginBottom: '30px',
  boxShadow: '0 0 10px 1px rgba(0,0,0,0.2 )',
});

export const HeadingTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-between',
});
