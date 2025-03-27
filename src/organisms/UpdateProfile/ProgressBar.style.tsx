import { Box, styled, Typography } from '@mui/material';

export const ProgressBarr = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  marginTop: '10px',
}));

export const ProTitle = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  color: theme.palette.black[200],
  fontWeight: '400',
  fontSize: '0.8rem',
  display: 'flex',
  marginBottom: '6px',
  justifyContent: 'start',
  '@media(max-width: 744px)': {
    marginTop: '0px',
    marginBottom: '7px',
  },
}));

export const Update = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: '0.8rem',
  fontWeight: '600',
  marginTop: '6px',
  display: 'flex',
  justifyContent: 'end',
  color: theme?.palette?.decor?.main,

  '@media(max-width: 744px)': {
    marginTop: '5px',
  },
}));
