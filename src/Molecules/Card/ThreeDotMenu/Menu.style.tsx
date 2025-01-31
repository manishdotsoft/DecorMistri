import { Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { theme } from '../../../thems/primitives/theme';
import fonts from '../../../thems/primitives/fonts';

export const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: '200px',
    backgroundColor: theme.palette.background.paper,
  },
}));

export const StyledMenuItem = styled(MenuItem)(() => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: 'bold',
  color: theme.palette.text.primary,
  fontFamily: fonts.primary,
  padding: '10px 16px',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
export const StatusButton = styled(Button)(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '5px',
  border: 'none',
  marginBottom: '5px',
  fontWeight: 'bold',
  fontFamily: fonts.primary,
  color: theme.palette.text.primary,
}));
