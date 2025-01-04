import { Box, ListItemButton, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { theme as customTheme } from '../../thems/primitives/theme';

export const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: customTheme.palette.background.default,
  height: '100vh',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(1),
}));

export const SidebarLink = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: customTheme.palette.action.hover,
  },
  color: customTheme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  marginBottom: theme.spacing(1),
}));

export const SidebarHead = styled(Box)({
  backgroundColor: customTheme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  textAlign: 'start',
  marginBottom: '20px',
  paddingLeft: '20px',
});

export const ImgBox = styled(Box)({
  marginBottom: '5px',
});

export const LogoName = styled(Typography)({
  fontWeight: 'bold',
  textAlign: 'center',
});
