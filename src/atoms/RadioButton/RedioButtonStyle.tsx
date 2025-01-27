import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';
import fonts from '../../thems/primitives/fonts';
import typeset from '../../thems/primitives/typeset';

export const StyledFormControl = styled(FormControl)(() => ({
  marginBottom: '20px',
}));

export const StyledFormLabel = styled(FormLabel)(() => ({
  fontSize: typeset.body1.fontSize,
  fontWeight: 'bold',
  fontFamily: fonts.primary,
  marginBottom: '10px',
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
}));
