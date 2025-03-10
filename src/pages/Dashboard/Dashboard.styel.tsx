import { Box, Typography } from '@mui/material';
import { theme } from './../../thems/primitives/theme';
import styled from 'styled-components';
import palette from '../../thems/primitives/palette';

export const HeadingItem = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 'bold',
  color: theme.palette.common.white,
  backgroundColor: palette.decor.dark,
  borderRadius: theme.shape.borderRadius,
  padding: '8px 12px',
  textTransform: 'uppercase',
});

export const BoxItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  width: '240px',
  gap: '16px',
  padding: '16px',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
});

export const BoxContainer = styled(Box)({
  gap: '16px',
  padding: '22px',
});

export const Divider = styled(Box)({
  backgroundColor: theme.palette.grey[300],
  height: '2px',
});
export const DividerColumn = styled(Box)({
  backgroundColor: theme.palette.grey[300],
  height: 'auto',
  width: '2px',
  margin: '20px 0',
  marginBottom: '40px',
});

export const Titel = styled(Typography)({
  textAlign: 'center',
  marginBottom: '25px',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: theme.palette.text.primary,
});

export const Cards = styled(Box)({
  marginBottom: '20px',
});

export const LoaderWrapper = styled(Box)({
  height: '80vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const ProjectHeading = styled(Typography)({
  fontWeight: '600 !important',
  fontSize: '18px',
  textTransform: 'uppercase',
  textAlign: 'center',
});
