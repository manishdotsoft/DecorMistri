import { styled } from '@mui/material';

export const StyledSidebarMain = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  borderRight: `2px solid ${theme.palette.grey[200]}`,
  gridRow: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  gap: '3.2rem',
  height: '100%',
}));
