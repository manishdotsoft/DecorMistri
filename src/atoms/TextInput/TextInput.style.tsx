import { styled } from '@mui/system';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';
import { theme } from '../../thems/primitives/theme';

export const FullWidthFormControl = styled('div')({
  width: '100%',
  display: 'flex',
  position: 'relative',
});

export const TextInputField = styled('input')({
  padding: '18px',
  width: '100%',
  border: `1px solid ${theme.palette.grey[300]}`,
  fontSize: '16px',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `2px solid ${DECOR_LOGO_COLOR}`,
  },
});

export const FormHelp = styled('span')({
  color: 'red',
  marginTop: '0px',
});
