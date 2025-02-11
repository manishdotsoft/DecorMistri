import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../thems/primitives/theme';
import Button from '../../atoms/Button/Button';
import { Box, Typography } from '@mui/material';
import fonts from '../../thems/primitives/fonts';
import palette from '../../thems/primitives/palette';
export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: fonts.primary,
});

export const FilterSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  cursor: 'pointer',
  padding: '22px',
  fontFamily: fonts.primary,
});

export const ActionsSection = styled('div')({
  display: 'flex',
  marginLeft: '40px',
  gap: '200px',
});

export const SearchContainer = styled('div')({
  position: 'relative',
  width: '100%',
});

export const StyledSearchIcon = styled(SearchIcon)({
  color: theme.palette.grey[700],
  position: 'absolute',
  top: '8px',
  left: '8px',
});

export const StyledButton = styled(Button)({
  width: '100%',
  borderRadius: '10px',
  padding: '15px',
});

export const TitelBox = styled(Typography)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: 'bold',
  fontFamily: fonts.primary,
});

export const DateBox = styled(Box)({
  display: 'flex',
  border: `1px solid 
  ${palette.grey[300]}`,
  borderRadius: '6px',
  fontFamily: fonts.primary,
});

export const StartDateBox = styled(Box)({
  position: 'relative',
  width: '120px',
  fontFamily: fonts.primary,
});

export const DateCntainer = styled(Box)({
  cursor: 'pointer',
});

export const IconBox = styled(Box)({
  position: 'absolute',
  top: '8px',
  right: '10px',
  fontFamily: fonts.primary,
});

export const DatePikerBox = styled(Box)({
  position: 'absolute',
  top: '50px',
  left: 0,
  backgroundColor: '#fff',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 10,
});
