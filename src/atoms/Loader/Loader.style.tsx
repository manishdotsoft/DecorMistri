import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { theme } from "../../thems/primitives/theme";

export const LoaderContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: theme.palette.background.paper,
}));

export const LoaderText = styled(Typography)(() => ({
  marginTop: theme.spacing(2),
  color: theme.palette.text.primary,
}));
