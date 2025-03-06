import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../thems/primitives/theme';
import Button from '../../atoms/Button/Button';
import { Box, Typography } from '@mui/material';
import fonts from '../../thems/primitives/fonts';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';
export const Container = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  fontFamily: fonts.primary,
  width: '100%',
  backgroundColor: '#fff',
});

export const FilterSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  cursor: 'pointer',
  padding: '22px',
  fontFamily: fonts.primary,
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

export const TitelBox = styled(Typography)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: typeset.h6.fontSize,
  fontWeight: 'bold',
  fontFamily: 'fonts.primary',
  [theme.breakpoints.down('lg')]: {
    fontSize: typeset.body1.fontSize,
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: typeset.body2.fontSize,
  },
}));

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
  boxShadow: `0 2px 10px ${palette.grey[300]}`,
  zIndex: 10,
});

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

export const DrawerTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: fonts.primary,
  fontSize: typeset.h5.fontSize,
  fontWeight: '600',
});
export const ContantBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
});

export const FilterSectionDrawer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
