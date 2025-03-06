import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../atoms/Button/Button';
import { Box, Typography } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
}));

export const FilterSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  cursor: 'pointer',
  padding: '22px',
});

export const ActionsSection = styled('div')(({ theme }) => ({
  display: 'flex',
  marginLeft: '10px',
  gap: '0px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '0px',
    display: 'none',
    gap: '10px',
  },
}));

export const SearchContainer = styled('div')({
  position: 'relative',
  width: '100%',
});

export const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.grey[700],
  position: 'absolute',
  top: '8px',
  left: '8px',
}));

export const StyledButton = styled(Button)({
  width: '100%',
  borderRadius: '10px',
  padding: '15px',
});

export const TitelBox = styled(Typography)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: theme.typography.h6.fontSize,
  fontWeight: 'bold',
  fontFamily: 'fonts.primary',
  [theme.breakpoints.down('lg')]: {
    fontSize: theme.typography.body1.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

export const DateBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  border: `1px solid 
  ${theme.palette.grey[300]}`,
  borderRadius: '6px',
}));

export const StartDateBox = styled(Box)({
  position: 'relative',
  width: '120px',
});

export const DateCntainer = styled(Box)({
  cursor: 'pointer',
});

export const IconBox = styled(Box)({
  position: 'absolute',
  top: '8px',
  right: '10px',
});

export const DatePikerBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '50px',
  left: 0,
  backgroundColor: theme.palette.white.main,
  boxShadow: `0 2px 10px ${theme.palette.grey[300]}`,
  zIndex: 10,
}));

export const DrawerBox = styled(Box)({
  width: '300px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const ChindContainer = styled(Box)({
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  padding: '10px  ',
});

export const DrawerTitle = styled(Typography)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  fontSize: theme.typography.h5.fontSize,
  fontWeight: '600',
}));
export const ContantBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FilterSectionDrawer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
