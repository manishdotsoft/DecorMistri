import * as React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./primitives/theme";

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
