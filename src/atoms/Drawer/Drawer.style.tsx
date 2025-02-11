import styled from 'styled-components';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';
import { Box } from '@mui/material';

export const HeaderProfileIcon = styled(Box)(() => ({
  background: DECOR_LOGO_COLOR,
  color: palette.white.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  height: '60px',
  width: '60px',
}));
export const ProfileBox = styled(Box)(() => ({
  fontSize: '1.1rem',
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
