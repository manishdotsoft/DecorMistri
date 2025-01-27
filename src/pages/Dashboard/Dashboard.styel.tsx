import { Box, Typography } from '@mui/material';
import { theme } from './../../thems/primitives/theme';
import styled from 'styled-components';

export const Divider = () => (
  <Box
    sx={{
      background: theme.palette.grey[100],
      height: 'auto',
      width: '0.1rem',
      marginTop: '80px',
      marginBottom: '20px ',
    }}
  />
);

export const HeadingItem = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bolder',
  color: theme.palette.common.white,
  backgroundColor: theme.palette.primary.dark,
  borderRadius: theme.shape.borderRadius,
});

export const BoxItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  gap: '10px',
});

export const BoxContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: '10px',
});

export const Drivider = styled(Box)({
  background: theme.palette.grey[300],
  height: '1px',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '25px',
});

export const Titel = styled(Typography)({
  textAlign: 'center',
  marginBottom: '25px',
  fontWeight: 600,
});

export const Cards = styled(Box)({
  marginBottom: '20px',
});
