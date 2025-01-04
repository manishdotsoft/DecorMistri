import { Box } from "@mui/material";
import { styled } from "@mui/system";
import typeset from "../../thems/primitives/typeset";

export const StyledSidebar = styled(Box)(({ theme }) => ({
  width: "250px",
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
}));

export const StyledPageContent = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  overflowY: "auto",
}));

export const Title = styled("h6")(() => ({
  marginBottom: "30px",
  fontSize: `${typeset.h6.fontSize}px`,
  fontFamily: typeset.fontFamily,
  fontWeight: 400,
  lineHeight: 1.5,
}));
