import { Box, styled, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const MainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));
export const CardContainer = styled(Box)(({ theme }) => ({
  width: '260px',
  border: `1px solid ${theme.palette.grey[800]} `,
  borderRadius: '10px',
}));
export const Title = styled(Typography)(() => ({
  padding: '8px 25px',
  fontSize: '16px',
  fontWeight: 600,
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
  fontSize: '13px',
  color: theme.palette.grey[500],
  fontFamily: theme.typography.fontFamily,
}));

export const HighlightedName = styled('span')(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.black[800],
  fontWeight: 'bold',
}));
export const ActionButtonsContainer = styled(Box)(() => ({
  marginTop: '16px',
  display: 'flex',
  gap: '8px',
}));
export const CardTitle = styled(Typography)(() => ({
  fontSize: '13px',
  fontWeight: 'bold',
}));
export const CardDate = styled(Typography)({
  fontSize: '13px',
  fontWeight: 'bold',
});
export const CardDescription = styled(Typography)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.grey[500],
}));

export const MoveToLiveLink = styled(Link)(({ theme }) => ({
  display: 'flex',
  marginTop: '8px',
  fontSize: '13px',
  justifyContent: 'end',
  fontWeight: 600,
  color: theme.palette.primary.blue,
  fontFamily: theme.typography.fontFamily,
  textDecoration: 'none',
}));
