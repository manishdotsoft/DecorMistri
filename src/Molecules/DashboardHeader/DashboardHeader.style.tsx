import Button from '../../atoms/Button/Button';
import { Box, styled, Typography } from '@mui/material';

export const Container = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  // width: '100%',
  padding: '14px 22px',
  backgroundColor: '#fdfdfd',
}));

export const FilterSection = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
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
  width: '40%',
  minWidth: '250px',
});

export const StyledSearchIcon = styled(Box)(() => ({
  // color: theme.palette.grey[700],
  position: 'absolute',
  top: '13px',
  left: '15px',
  // height: '7px',
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

export const DateBox = styled(Box)<{ borderColor: string }>(
  ({ theme, borderColor }) => ({
    display: 'flex',

    border: `1px solid ${borderColor || theme.palette.grey[300]}`,
    borderRadius: '6px',
    paddingRight: '10px',
    marginLeft: '10px',
    cursor: 'pointer',
  })
);

export const IconBox = styled(Box)({
  position: 'absolute',
  top: '8px',
  right: '10px',
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

export const ShortSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '8px',
}));

export const ShortIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const ThreeLineIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '2px',
}));
