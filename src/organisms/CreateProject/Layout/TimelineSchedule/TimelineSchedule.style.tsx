import { styled } from '@mui/system';
import { Box } from '@mui/material';
import palette from '../../../../thems/primitives/palette';
import typeset from '../../../../thems/primitives/typeset';
import { theme } from '../../../../thems/primitives/theme';

export const Container = styled(Box)({
  maxWidth: '1200px',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: palette.text.primary,
  fontFamily: typeset.fontFamily,
});

export const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const InputLabelItem = styled('label')(() => ({
  fontFamily: typeset.secondaryFontFamily,
  fontSize: typeset.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});
