import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const MainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
export const CardContainer = styled(Box)(({ theme }) => ({
  width: '280px',
  border: `1px solid ${theme.palette.grey[800]} `,
  borderRadius: '10px',
}));
export const Title = styled(Typography)(() => ({
  padding: '0 25px',
  paddingTop: '10px',
  fontSize: '16px',
}));
export const CardBox = styled(Box)(() => ({
  marginBottom: '10px',
  margin: ' 10px',
}));
export const Card = styled(Box)(({ theme }) => ({
  padding: '10px',
  border: `1px solid ${theme.palette.grey[800]} `,
  background: theme.palette.grey[200],
  borderRadius: '6px',
  marginTop: '10px',
}));
export const NotificationWrapper = styled(Box)(({ theme }) => ({
  padding: '10px',
  border: `1px solid ${theme.palette.grey[800]} `,
  borderRadius: '6px',
  margin: '0 10px',
  marginBottom: '20px',
}));
export const NotificationText = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.grey[500],
}));

export const HighlightedName = styled(Box)(({ theme }) => ({
  fontSize: '16px',
  color: theme.palette.black[800],
  fontWeight: 'bold',
}));
export const ActionButtonsContainer = styled(Box)(() => ({
  marginTop: '16px',
  display: 'flex',
  gap: '8px',
}));
export const CardTitle = styled(Typography)(() => ({
  fontSize: '14px',
  fontWeight: 'bold',
}));
export const CardDate = styled(Typography)({
  fontSize: '14px',
});
export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.grey[500],
}));

export const MoveToLiveLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  marginTop: '8px',
  justifyContent: 'end',
  color: theme.palette.primary.blue,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));
