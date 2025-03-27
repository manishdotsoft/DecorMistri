import { styled } from '@mui/material';

interface InputLabelItemProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const FullWidthFormControl = styled('div')(() => ({
  position: 'relative',
  width: '100%',
}));

export const InputLabelItem = styled('label')<
  InputLabelItemProps & { fontSize?: string }
>(({ theme, fontSize }) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: fontSize || '1rem',
  marginBottom: '4px',
  color: theme.palette.grey[700],
}));

export const SelectWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
}));

export const SelectItem = styled('select')(({ theme }) => ({
  fontFamily: theme.typography.fontFamily,
  width: '100%',
  padding: '14px',
  border: `1px solid ${theme.palette.grey[300]}`,
  appearance: 'none',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `1px solid ${theme.palette.decor.main}`,
  },
  cursor: 'pointer',
  // '&.css-1yzywgk': {

  // },
}));

export const IconWrapper = styled('div')(() => ({
  position: 'absolute',
  top: '50%',
  right: '12px',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
}));

export const OptionSelect = styled('option')(() => ({
  fontSize: '14px',
}));

export const ContainerMain = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

export const ErrorMe = styled('div')(() => ({}));
