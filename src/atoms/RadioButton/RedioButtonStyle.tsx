import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';
import { theme as customTheme } from '../../thems/primitives/theme';

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: customTheme.spacing(2),
}));

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: customTheme.typography.body1.fontSize,
  fontWeight: customTheme.typography.fontWeightBold,
  fontFamily: customTheme.typography.fontFamily,
  marginBottom: customTheme.spacing(1),
}));

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  gap: customTheme.spacing(1),
}));
