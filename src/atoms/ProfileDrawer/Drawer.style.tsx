import styled from 'styled-components';
import { Box } from '@mui/material';
import palette from '../../thems/primitives/palette';

export const HeaderProfileIcon = styled(Box)(({ theme }) => ({
  background: theme.palette?.decor?.main || palette.decor.main,
  color: theme.palette?.white?.main || palette.white.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  height: '60px',
  width: '60px',
}));
export const ProfileBox = styled(Box)(() => ({
  fontSize: ' 24px',
}));

export const UserBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
}));

export const UserAccount = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '6px',
}));

export const DrawerContainer = styled(Box)(() => ({
  width: 330,
  padding: 16,
  borderRadius: '10px',
}));
