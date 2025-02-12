import styled from 'styled-components';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import palette from '../../thems/primitives/palette';
import { Box } from '@mui/material';
import typeset from '../../thems/primitives/typeset';

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
  fontSize: typeset.h5.fontSize,
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
