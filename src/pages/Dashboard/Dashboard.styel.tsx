import { Box, Typography } from '@mui/material';
import { theme } from '../../thems/primitives/theme';
import styled from 'styled-components';

export const Divider = () => (
  <Box
    sx={{
      background: theme.palette.grey[100],
      height: 'auto',
      width: '0.1rem',
      marginTop: 6,
      marginBottom: 3,
    }}
  />
);

export const HeadingItem = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  fontWeight: 'bolder',
  color: '#ffffff',
  backgroundColor: '#563462',
  borderRadius: '4px',
});

export const BoxItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '260px',
  gap: 4,
});

export const BoxContainer = styled(Box)({
  display: 'flex',
  flexWrap: 'nowrap',
  justifyContent: 'space-between',
  gap: 4,
});

export const Drivider = styled(Box)({
  background: 'grey',
  height: '1px',
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '20px',
});

export const Titel = styled(Typography)({
  textAlign: 'center',
  marginBottom: 4,
  fontWeight: 600,
});

export const Cards = styled(Box)({
  marginBottom: '15px',
});
