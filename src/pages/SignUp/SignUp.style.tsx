import { styled } from "@mui/material/styles";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

export const StyledContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
}));

export const StyledForm = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(4),
  margin: "auto",
  maxWidth: "400px",
}));

export const StyledHeader = styled(Box)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(3),
}));
export const GooleSignUp = styled(Button)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "auto",
  marginTop: "25px",
  gap: "8px",
  color: theme.palette.grey[900],
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "0.7rem",
  color: theme.palette.error.main,
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  padding: theme.spacing(1.5),
  textTransform: "none",
}));

export const StyledContainerWrapper = styled(Container)(({ theme }) => ({
  // maxWidth: "xs",
}));
