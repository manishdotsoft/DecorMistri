import { styled } from '@mui/material/styles';
import { FormControl, FormLabel, RadioGroup } from '@mui/material';

export const StyledFormControl = styled(FormControl)(() => ({
  marginBottom: '20px',
}));

export const StyledFormLabel = styled(FormLabel)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 'bold',

  marginBottom: '10px',
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
}));
