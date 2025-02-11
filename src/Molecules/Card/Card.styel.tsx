import { Box, styled, Typography } from '@mui/material';
import { theme } from '../../thems/primitives/theme';
import palette from '../../thems/primitives/palette';
import typeset from '../../thems/primitives/typeset';
import fonts from '../../thems/primitives/fonts';

interface SuccessStatusProps {
  isStarted: boolean;
}

export const Button = styled('button')({
  height: '20px',
  width: '20px',
});

export const CardContainer = styled('div')({
  marginBottom: '30px',
  boxShadow: `0 0 10px 1px ${theme.palette.grey[400]}`,
  minWidth: '240px',
  backgroundColor: palette.decor.Lite,
  borderRadius: '8px',
  fontFamily: fonts.primary,
});

export const HeadingTitle = styled(Typography)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: typeset.h6.fontSize,
  fontWeight: 'bold',
  color: palette.text.primary,
  backgroundSize: '300% 100%',
  padding: '5px 10px',
  marginBottom: '10px',
  borderRadius: '6px',
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: fonts.primary,
});
export const ButtonBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10px',
  fontFamily: fonts.primary,
});

export const TiteleStatus = styled(Typography)({
  marginTop: '25px',
  marginBottom: '5px',
  color: theme.palette.error.main,
  fontSize: typeset.body1.fontSize,
  fontFamily: fonts.primary,
});

export const SuccessStatus = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isStarted',
})<SuccessStatusProps>(({ theme, isStarted }) => ({
  marginTop: '5px',
  marginBottom: '5px',
  color: isStarted ? theme.palette.primary.main : theme.palette.error.main,
  fontSize: typeset.body2.fontSize,
  fontFamily: fonts.primary,
}));

export const ButtonWrapper = styled(Box)({});
