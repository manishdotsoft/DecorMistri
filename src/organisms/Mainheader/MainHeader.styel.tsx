import { Box, styled } from '@mui/material';

export const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${theme?.palette?.grey[200]}`,
  padding: '10px 20px',
}));

export const StyledHeader = styled(Box)(() => ({
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const Logo = styled('img')(() => ({
  height: '30px',
}));

export const Line = styled(Box)(({ theme }) => ({
  width: '1px',
  display: 'flex',
  flexDirection: 'row',
  background: theme?.palette?.grey[500],
  height: '30px',
}));

export const HeaderTitle = styled('span')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  fontWeight: '600',
  fontSize: '20px',
}));

export const HeaderProfileIcon = styled(Box)(({ theme }) => ({
  height: '40px',
  width: '40px',
  backgroundColor: theme?.palette?.decor.main,
  color: theme?.palette?.white?.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '0',
  borderRadius: '50%',
  cursor: 'pointer',
}));

export const ProfileBox = styled(Box)(() => ({
  fontSize: '20px',
}));

export const Profileimg = styled('img')(() => ({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
}));
