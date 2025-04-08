import { styled } from '@mui/material';

export const StyledSidebarMain = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.white.main,
  borderRight: `2px solid ${theme.palette.grey[200]}`,
  // gridRow: '1 / -1',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '3.2rem',
  // height: '100%',
  height: 'calc(100vh - 60px)',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '2px',
  },

  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.decor.main,
    borderRadius: '10px',
  },

  '@media (max-height: 600px)': {
    // overflowY: 'scroll',
    // paddingBottom: '10px',
    /* Scrollbar styles */
    '&::-webkit-scrollbar': {
      width: '2px',
    },
    '&::-webkit-scrollbar-track': {
      background: theme.palette.grey[300],
      borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.decor.main,
      borderRadius: '10px',
    },
  },
}));
