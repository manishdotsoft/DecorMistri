import { styled } from '@mui/material';

export const FullWidthFormControl = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
}));

export const TextInputField = styled('input')(({ theme }) => ({
  padding: '18px',
  width: '100%',
  border: `1px solid ${theme.palette.grey[300]}`,
  fontSize: '16px',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `2px solid ${theme.palette.decor.main}`,
  },
}));

export const FormHelp = styled('span')(() => ({
  color: 'red',
  marginTop: '0px',
}));
