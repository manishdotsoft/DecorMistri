import { Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: '232px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: `${theme.palette.black[100]}`,
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,

  padding: '10px 16px',
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
