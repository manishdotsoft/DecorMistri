import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../atoms/Button/Button';
import { theme } from '../../thems/primitives/theme';

export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const FilterSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  cursor: 'pointer',
});

export const ActionsSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  alignItems: 'center',
  padding: '20px',
});

export const SearchContainer = styled('div')({
  position: 'relative',
  width: '90%',
});

export const StyledSearchIcon = styled(SearchIcon)({
  color: theme.palette.grey[700],
  position: 'absolute',
  top: '10px',
  right: '6px',
});

export const StyledButton = styled(Button)({
  width: '100%',
  borderRadius: '10px',
  padding: '15px',
});
