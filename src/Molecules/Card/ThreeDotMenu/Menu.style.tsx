import { Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { theme } from '../../../thems/primitives/theme';

export const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: 150,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  padding: '10px 16px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
export const StatusButton = styled(Button)(() => ({
  width: '200px',
  display: 'flex',
  gap: '10px',
  marginBottom: '10px',
}));
