import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import palette from '../../../../thems/primitives/palette';
import typeset from '../../../../thems/primitives/typeset';
import { BOX_SHADOW3 } from '../../../../thems/primitives/colors';
import { theme } from '../../../../thems/primitives/theme';

export const Container = styled(Box)({
  maxWidth: '1200px',
  margin: ' 0px auto',

  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: palette.text.primary,
  fontFamily: typeset.fontFamily,
  backgroundColor: theme.palette.background.paper,
  borderTopLeftRadius: '14px',
  borderTopRightRadius: '14px',
  boxShadow: BOX_SHADOW3,
});

export const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const GridContainer2 = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '0.98fr 2fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const StyledTypography = styled(Typography)(() => ({
  fontSize: '12px',
  color: palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});

export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const InputLabelItem = styled('label')(() => ({
  fontFamily: typeset.secondaryFontFamily,
  fontSize: typeset.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const InputIconFor = styled(Box)(() => ({
  position: 'relative',
}));

export const WebsiteIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 18,
}));

export const EmailIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 20,
}));

export const LocationIconSec = styled('img')(() => ({
  position: 'absolute',
  right: 10,
  top: 16,
}));
