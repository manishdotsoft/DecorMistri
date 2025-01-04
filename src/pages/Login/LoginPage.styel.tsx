import { styled } from '@mui/material/styles';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { theme as customTheme, theme } from '../../thems/primitives/theme';

export const LoginContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '70vh',
  backgroundColor: theme.palette.background.paper || '#fff',
  boxShadow: '0px 0px 5px 1px rgba(0,0,0,0.5)',
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
}));
export const Title = styled(Typography)({
  fontWeight: 600,
});

export const MainCon = styled(Box)({
  backgroundColor: theme.palette.background.default,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const ForgetPas = styled(Typography)({
  color: theme.palette.grey[600],
  marginTop: theme.spacing(1),
  display: 'flex',
  justifyContent: 'space-between',
  gap: theme.spacing(1),
});

export const ForgetPasF = styled(Typography)({
  color: theme.palette.grey[600],
  textAlign: 'end',
});

export const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  textAlign: 'center',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.shape.borderRadius,
  },
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor:
    customTheme.palette.primary.main || theme.palette.primary.main,
  marginTop: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  textTransform: 'none',
  marginBottom: theme.spacing(2),
  fontWeight: 500,
  fontSize: theme.typography.h6.fontSize,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
