import { Box } from '@mui/material';
import styled from 'styled-components';
import fonts from '../../../../thems/primitives/fonts';
import {
  DECOR_LOGO_COLOR,
  SHADE_COLOR,
} from '../../../../thems/primitives/colors';
import palette from '../../../../thems/primitives/palette';
import typeset from '../../../../thems/primitives/typeset';

export const Header = styled(Box)(() => ({
  fontFamily: fonts.primary,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: `1px solid ${SHADE_COLOR}`,
  padding: '10px 25px',
}));

export const StyledHeader = styled(Box)(() => ({
  fontFamily: fonts.primary,
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
}));

export const Logo = styled('img')(() => ({
  height: '30px',
}));

export const Line = styled(Box)(() => ({
  fontFamily: fonts.primary,
  width: '1px',
  display: 'flex',
  flexDirection: 'row',
  background: palette.grey[500],
  height: '30px',
}));

export const HeaderTitle = styled('span')(() => ({
  fontWeight: '600',
  fontSize: typeset.h6.fontSize,
  fontFamily: fonts.primary,
}));

export const HeaderProfileIcon = styled(Box)(() => ({
  height: '40px',
  width: '40px',
  background: DECOR_LOGO_COLOR,
  color: palette.white.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
}));

export const ProfileBox = styled(Box)(() => ({
  fontSize: '1.1rem',
}));
