import { Box } from '@mui/material';
import styled from 'styled-components';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

export const ProgressBarr = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: '16px',
}));

export const ProTitle = styled('p')(() => ({
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'start',
  '@media(max-width: 744px)': {
    marginTop: '0px',
    marginBottom: '7px',
  },
}));

export const Update = styled('p')(() => ({
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'end',
  color: DECOR_LOGO_COLOR,

  '@media(max-width: 744px)': {
    marginTop: '5px',
  },
}));
