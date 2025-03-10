import { Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';

export const StyledMenu = styled(Menu)<{ borderColor?: string }>(
  ({ theme, borderColor }) => ({
    '& .MuiPaper-root': {
      borderRadius: '8px',
      minWidth: '152px',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[3],
      border: `3px solid ${borderColor || theme.palette.grey[400]} !important`,
    },
  })
);

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,

  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
export const StatusButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '5px',
  border: 'none',
  marginBottom: '5px',
  fontWeight: 'bold',
  padding: '0',

  color: theme.palette.text.primary,
  textTransform: 'inherit',
  fontSize: theme.typography.body2.fontSize,
  transition: 'all 0.3s ease-in-out',
  width: '200px',
  paddingLeft: '5px',
  '&:hover': {
    transform: 'scale(1.05)',
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.decor.main,
  },
}));
