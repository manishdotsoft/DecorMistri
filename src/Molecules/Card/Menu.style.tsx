import { Box, styled } from '@mui/material';
import { Menu } from '@mui/material';

export const StyledMenu = styled(Menu)<{ borderColor?: string }>(
  ({ theme, borderColor }) => ({
    '&& .MuiPaper-root': {
      borderRadius: '8px',
      minWidth: '150px',
      backgroundColor: theme.palette.background.paper,
      border: `1px solid ${borderColor || theme.palette.grey[400]} !important`,
      boxShadow: 'none !important',
    },
  })
);

export const StyledMenuItem = styled('div')(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: theme.palette.black[200],
  padding: '5px 8px !important',
  gap: '0px !important',
  fontFamily: theme.typography.fontFamily,
  cursor: 'pointer',

  '&:hover': {
    // backgroundColor: theme.palette.action.hover,
    color: theme.palette.decor.main,
  },
}));

export const StatusButton = styled('span')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  border: 'none',
  color: theme.palette.text.primary,
  textTransform: 'inherit',
  fontSize: theme.typography.subtitle2.fontSize,
  cursor: 'pointer',
  fontFamily: theme.typography.fontFamily,

  width: '100%',
  '&:hover': {
    color: theme.palette.decor.main,
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
  paddingRight: '2px',
});

export const StatusContainer = styled(Box)<{ borderColor?: string }>(
  ({ theme, borderColor }) => ({
    padding: theme.spacing(1),
    gap: '8px',
    display: 'flex',
    backgroundColor: 'none',
    flexDirection: 'column',

    border: `1px solid ${borderColor || theme.palette.divider}`,
  })
);
