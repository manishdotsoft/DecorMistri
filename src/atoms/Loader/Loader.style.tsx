import { Box, Typography, styled } from '@mui/material';

export const LoaderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const LoaderText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
}));
