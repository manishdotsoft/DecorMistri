import { styled } from '@mui/material';

export const FullWidthFormControl = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  position: 'relative',
}));

export const TextInputField = styled('input')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  padding: '16px',
  width: '100%',
  border: `1px solid ${theme.palette.grey[300]}`,
  fontSize: '14px',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `1px solid ${theme.palette.decor.main}`,
  },

  /* Hide arrows in number input for Chrome, Safari, Edge, Opera */
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  /* Hide arrows in number input for Firefox */
  '&[type=number]': {
    MozAppearance: 'textfield',
  },
}));

export const FormHelp = styled('span')(() => ({
  color: 'red',
  marginTop: '0px',
}));
