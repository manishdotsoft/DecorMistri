import {
  Box,
  ListItemButton,
  ListItemText,
  styled,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavList = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.2rem',
  textDecoration: 'none',
  listStyle: 'none',
}));

export const StyledNavLink = styled(NavLink)(() => ({}));
export const MainSidebar = styled(Box)(({ theme }) => ({
  bgcolor: theme.palette.white.main,
  paddingTop: '1.5rem',
}));

export const ChildSidebar = styled(Box)(({ theme }) => ({
  color: theme?.palette?.grey?.greyFontColor,
}));

export const DropDownListItemButton = styled(ListItemButton)(() => ({
  '&.MuiListItemButton-root': {
    padding: '8px 10px 8px 28px',
  },
}));

export const DropDownItems = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selectedItem' && prop !== 'itemTitle',
})<{ selectedItem: string | null; itemTitle: string }>(
  ({ theme, selectedItem, itemTitle }) => ({
    marginLeft: '2.5rem',
    borderLeft: `5px solid ${
      selectedItem === itemTitle
        ? theme.palette.decor.main
        : theme.palette.white.main
    }`,
    backgroundColor:
      selectedItem === itemTitle
        ? theme.palette.grey[20]
        : theme.palette.white.main,
    '& .MuiTypography-root': {
      fontSize: '0.95rem',
    },
  })
);

export const DropDownLableTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== 'isSelected',
})<{ isOpen: boolean; isSelected: boolean }>(
  ({ theme, isOpen, isSelected }) => ({
    marginLeft: '1rem',
    fontSize: '0.95rem',
    color:
      isOpen || isSelected
        ? theme.palette.black[800]
        : theme.palette.grey.greyFontColor,
    fontWeight: '600',
  })
);

export const SubItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  marginLeft: '8px',
  fontSize: '0.95rem',
  color: isSelected
    ? theme.palette.decor.main
    : theme.palette.grey.greyFontColor,
  fontWeight: '600',
}));

export const ListItemButtonIcon = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selectedItem' && prop !== 'itemTitle',
})<{ selectedItem: string | null; itemTitle: string }>(
  ({ theme, selectedItem, itemTitle }) => ({
    '&.MuiListItemButton-root': {
      padding: '8px 15px 8px 24px',
      backgroundColor:
        selectedItem === itemTitle
          ? theme.palette.grey[20]
          : theme.palette.white.main,
      borderLeft: `5px solid ${selectedItem === itemTitle ? theme.palette.decor.main : theme.palette.white.main}`,
    },
  })
);

export const ListItemTextSec = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== 'selectedItem' && prop !== 'itemTitle',
})<{ selectedItem: string | null; itemTitle: string }>(
  ({ theme, selectedItem, itemTitle }) => ({
    marginLeft: '12px',
    '& .MuiTypography-root': {
      fontSize: '0.95rem',
      color:
        selectedItem === itemTitle
          ? theme.palette.decor.main
          : theme.palette.grey.greyFontColor,
      fontWeight: '600',
    },
  })
);

export const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== 'selectedItem' && prop !== 'itemTitle' && prop !== 'openSection',
})<{
  selectedItem: string | null;
  itemTitle: string;
  openSection: string | null;
}>(({ selectedItem, itemTitle, openSection }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '8px',

  '& img': {
    filter:
      selectedItem === itemTitle || openSection === itemTitle
        ? 'brightness(0) invert(0)' // Turns icon black when active
        : 'none',
    transition: 'all 0.3s ease',
  },
}));
