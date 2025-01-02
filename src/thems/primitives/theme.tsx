import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import typeset from "./typeset";

export const theme = createTheme({
  palette,
  typography: typeset,
});
