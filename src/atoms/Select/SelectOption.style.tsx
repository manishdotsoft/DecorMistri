import { styled } from '@mui/system';
import typeset from '../../thems/primitives/typeset';
import { theme } from '../../thems/primitives/theme';
import { DECOR_LOGO_COLOR } from '../../thems/primitives/colors';

interface InputLabelItemProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const FullWidthFormControl = styled('div')({
  position: 'relative',
  width: '100%',
});

export const InputLabelItem = styled('label')<InputLabelItemProps>({
  fontSize: '1rem',
  marginBottom: '4px',
  color: theme.palette.grey[600],
  fontFamily: typeset.secondaryFontFamily,
});

export const SelectWrapper = styled('div')({
  position: 'relative',
  width: '100%',
});

export const SelectItem = styled('select')({
  width: '100%',
  padding: '12px 40px 12px 12px',
  border: `1px solid ${theme.palette.grey[300]}`,

  fontSize: '16px',
  appearance: 'none',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `2px solid ${DECOR_LOGO_COLOR}`,
  },
  cursor: 'pointer',
});

export const IconWrapper = styled('div')({
  position: 'absolute',
  top: '50%',
  right: '12px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
});

export const OptionSelect = styled('option')({
  fontSize: '14px',
});

export const ContainerMain = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

export const ErrorMe = styled('div')({});
