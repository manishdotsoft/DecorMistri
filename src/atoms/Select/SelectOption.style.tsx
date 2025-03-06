import { styled } from '@mui/system';

interface InputLabelItemProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const FullWidthFormControl = styled('div')(() => ({
  position: 'relative',
  width: '100%',
}));

export const InputLabelItem = styled('label')<InputLabelItemProps>(
  ({ theme }) => ({
    fontSize: '1rem',
    marginBottom: '4px',
    color: theme.palette.grey[600],
  })
);
export const SelectWrapper = styled('div')(() => ({
  position: 'relative',
  width: '100%',
}));

export const SelectItem = styled('select')(({ theme }) => ({
  width: '100%',
  padding: '12px 40px 12px 12px',
  border: `1px solid ${theme.palette.grey[300]}`,

  fontSize: '16px',
  appearance: 'none',
  backgroundColor: theme.palette.primary.contrastText,
  outline: 'none',
  '&:focus': {
    border: `2px solid ${theme.palette.decor.main}`,
  },
  cursor: 'pointer',
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
