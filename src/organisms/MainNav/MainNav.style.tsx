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
  color: theme.palette.grey[400],
}));

export const DropDownListItemButton = styled(ListItemButton)(() => ({
  '&.MuiListItemButton-root': {
    padding: '10px 10px 10px 28px',
  },
}));

export const DropDownLableTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isOpen' && prop !== 'isSelected',
})<{ isOpen: boolean; isSelected: boolean }>(
  ({ theme, isOpen, isSelected }) => ({
    marginLeft: '1rem',
    fontSize: '0.95rem',
    color:
      isOpen || isSelected ? theme.palette.black[800] : theme.palette.grey[700],
    fontWeight: isOpen || isSelected ? 'bold' : '500',
  })
);

export const SubItemTitle = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isSelected',
})<{ isSelected: boolean }>(({ theme, isSelected }) => ({
  marginLeft: '8px',
  fontSize: '0.95rem',
  color: isSelected ? theme.palette.decor.main : theme.palette.grey[400],
  fontWeight: isSelected ? 'bold' : '500',
}));

export const ListItemButtonIcon = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'selectedItem' && prop !== 'itemTitle',
})<{ selectedItem: string | null; itemTitle: string }>(
  ({ theme, selectedItem, itemTitle }) => ({
    '&.MuiListItemButton-root': {
      padding: '10px 15px 10px 24px',
      backgroundColor:
        selectedItem === itemTitle
          ? theme.palette.grey[150]
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
          : theme.palette.grey[700],
      fontWeight: selectedItem === itemTitle ? '600' : '500',
    },
  })
);
