import { styled } from '@mui/system';
import { Box, FormControl, InputLabel, Typography } from '@mui/material';
import palette from '../../../../thems/primitives/palette';
import typeset from '../../../../thems/primitives/typeset';

export const Container = styled(Box)({
  maxWidth: '1000px',
  margin: 'auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  color: palette.text.primary,
  fontFamily: typeset.fontFamily,
});

export const FlexRow = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  color: palette.text.secondary,
});

export const FullWidthFormControl = styled(FormControl)({
  width: '100%',
  backgroundColor: palette.white.main,
  color: palette.text.primary,
  borderColor: palette.primary.main,
});

export const InputLabelItem = styled(InputLabel)({
  backgroundColor: palette.white.main,
  padding: '0 8px',
});

export const ButtonSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

export const FormArea = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: '12px',
  color: palette.error.main,
  fontFamily: 'sans-serif',

  marginLeft: '15px',
}));

export const GridContainer = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: '20px',
  // rowGap: '15px',
  width: '100%',
});
export const GridContainerChild = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '1fr',
  columnGap: '20px',
  rowGap: '15px',
  width: '100%',
});

export const InputSection = styled(Typography)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
}));
