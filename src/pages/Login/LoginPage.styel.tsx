import { styled } from '@mui/system';
import { Container, TextField, Button, Box } from '@mui/material';
import { theme as customTheme } from '../../thems/primitives/theme';

export const LoginContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
  backgroundColor: '#fff',
  boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.5)',
}));

export const Logo = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '24px',
}));

export const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
  },
});

export const StyledButton = styled(Button)({
  backgroundColor: customTheme.palette.primary.main,
  marginTop: '16px',
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: 500,
  fontSize: '16px',
});
