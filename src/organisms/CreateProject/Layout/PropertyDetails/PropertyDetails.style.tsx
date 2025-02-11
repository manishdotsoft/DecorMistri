import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
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
  backgroundColor: theme.palette.background.paper,
});

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '20px',
});

export const InputLabelItem = styled('label')(() => ({
  fontFamily: typeset.secondaryFontFamily,
  fontSize: typeset.body2.fontSize,
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const SelectFile = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '3px',
});

export const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const StyledTypography = styled(Typography)(() => ({
  fontSize: typeset.caption.fontSize,
  color: palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));
export const InputSection = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));

export const SelectFileParent = styled(Box)(() => ({}));
export const SelectSection = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  padding: '8px 16px',
  width: '93.7%',
  height: '35px',
  justifyContent: 'center',
  border: `1px solid ${theme.palette.grey[500]}`,
  borderRadius: '6px',
  color: '',
}));

export const FileText = styled(Typography)(() => ({
  marginTop: '8px',
  fontSize: typeset.subtitle2.fontSize,
  color: theme.palette.grey[700],
}));

export const TextArea = styled('textarea')(() => ({
  width: '100%',
  borderRadius: '6px',
  height: '120px',
  borderColor: theme.palette.grey[600],
}));
