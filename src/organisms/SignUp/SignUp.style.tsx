import { styled } from '@mui/material/styles';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Link as MuiLink,
  Grid,
} from '@mui/material';

export const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

export const StyledForm = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),
  margin: 'auto',
  maxWidth: '800px',
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

export const MainGrid = styled(Grid)(() => ({
  display: 'flex',
  gap: '10px',
}));

export const ChildGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '0.7rem',
  color: theme.palette.error.main,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  textTransform: 'none',
}));

export const StyledContainerWrapper = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(3),
  color: theme.palette.grey[900],
}));

export const StyledLink = styled(MuiLink)({
  cursor: 'pointer',
  color: 'blue',
  textDecoration: 'none',
});

export const StyledBoxCenter = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: theme.spacing(2),
}));

export const Logo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
  textAlign: 'center',
}));

export const Title = styled(Typography)({
  fontWeight: 600,
});
