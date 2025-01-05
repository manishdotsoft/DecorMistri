import { styled } from '@mui/system';
import {
  Box,
  ListItemButton,
  Typography,
  ListItemText as MUIListItemText,
} from '@mui/material';
import { theme as customTheme } from '../../thems/primitives/theme';

export const SidebarContainer = styled(Box)(({ theme }) => ({
  backgroundColor: customTheme.palette.background.default,
  height: '100%',
  width: '250px',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: theme.spacing(2),
  paddingLeft: theme.spacing(1),
  boxShadow: '2px 0px 5px rgba(0,0,0,0.1)',
  transition: 'all 0.3s ease-in-out',
}));

export const SidebarHead = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  marginBottom: '20px',
  gap: '10px',
}));

export const ImgBox = styled(Box)(() => ({
  marginRight: '10px',
}));

export const CustomListItemText = styled(MUIListItemText)(() => ({
  fontWeight: 800,
}));

export const LogoName = styled(Typography)(() => ({
  fontWeight: 'bold',
  color: customTheme.palette.text.primary,
  fontSize: '1.2rem',
}));

export const SidebarLink = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: customTheme.palette.action.hover,
    transform: 'scale(1.02)',
    transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
  },
  color: customTheme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  fontFamily: customTheme.typography.fontFamily,
  fontWeight: 800,
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1),
  '&.active': {
    backgroundColor: customTheme.palette.action.selected,
    color: customTheme.palette.primary.main,
  },
}));

export const SidebarLinkText = styled(MUIListItemText)(() => ({
  fontWeight: 800,
}));

export const AnimatedCollapse = styled(Box)(() => ({
  transition: 'height 0.3s ease, opacity 0.3s ease',
  overflow: 'hidden',
}));
