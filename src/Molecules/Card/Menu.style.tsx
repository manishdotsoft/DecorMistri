import { Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import { theme } from '../../thems/primitives/theme';
import fonts from '../../thems/primitives/fonts';

import typeset from '../../thems/primitives/typeset';
import palette from '../../thems/primitives/palette';

export const StyledMenu = styled(Menu)(() => ({
  '& .MuiPaper-root': {
    borderRadius: '8px',
    padding: '8px 0',
    minWidth: '232px',
    backgroundColor: theme.palette.background.paper,
    boxShadow:
      '0px 3px 3px - 2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12)',
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
  padding: '0',
  fontFamily: fonts.primary,
  color: theme.palette.text.primary,
  textTransform: 'inherit',
  fontSize: typeset.body2.fontSize,
  transition: 'all 0.3s ease-in-out',
  width: '200px',
  paddingLeft: '5px',
  '&:hover': {
    transform: 'scale(1.05)',
    color: theme.palette.grey[50],
    backgroundColor: palette.decor.main,
  },
}));
