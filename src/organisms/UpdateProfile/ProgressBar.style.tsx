import { Box, SxProps } from '@mui/material';
import styled from 'styled-components';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';

export const ProgressBarr = styled(Box)(() => ({
  width: '100%',
  textAlign: 'center',
  mb: 2,
}));

export const ProTitle = styled('p')(() => ({
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'start',
}));

export const Update = styled('p')(() => ({
  fontSize: '0.9rem',
  display: 'flex',
  justifyContent: 'end',
  color: DECOR_LOGO_COLOR,
}));
export const ProgressBarStyles = (progress: number): SxProps => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: palette.grey[100],

  '& .MuiLinearProgress-bar': {
    backgroundColor: DECOR_LOGO_COLOR,
  },
  width: '230px',
  margin: '5px 0',
});
