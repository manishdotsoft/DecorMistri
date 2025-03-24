import { Box, Button, styled } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';

export const StyledMenu = styled(Menu)<{ borderColor?: string }>(
  ({ theme, borderColor }) => ({
    '&& .MuiPaper-root': {
      borderRadius: '8px',
      minWidth: '152px',
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${borderColor || theme.palette.grey[400]} !important`,
      boxShadow: 'none !important',
    },
  })
);

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  display: 'flex',
  color: theme.palette.black[200],
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
  padding: '0',
  color: theme.palette.text.primary,
  textTransform: 'inherit',
  fontSize: theme.typography.body2.fontSize,
  transition: 'all 0.3s ease-in-out',
  width: '100%',
  paddingLeft: '5px',
  '&:hover': {
    transform: 'scale(1.05)',
    color: theme.palette.grey[50],
    backgroundColor: theme.palette.decor.main,
  },
}));

export const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
});

export const MenuHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingRight: '8px',
});

export const StatusContainer = styled(Box)<{ borderColor?: string }>(
  ({ theme, borderColor }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    border: `1px solid ${borderColor || theme.palette.divider}`,
  })
);
