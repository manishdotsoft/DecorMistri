import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ToasterContainer = styled(Box)(() => ({
  position: "fixed",

  display: "flex",
  flexDirection: "column",
}));
