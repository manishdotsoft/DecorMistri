import { styled } from "@mui/system";
import { Box, FormControl, InputLabel } from "@mui/material";
import palette from "../../../../thems/primitives/palette";
import typeset from "../../../../thems/primitives/typeset";

export const Container = styled(Box)({
  maxWidth: "1000px",
  margin: "auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  color: palette.text.primary,
  fontFamily: typeset.fontFamily,
});

export const FlexRow = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  color: palette.text.secondary,
});

export const FullWidthFormControl = styled(FormControl)({
  width: "100%",
  backgroundColor: palette.white.main,
  color: palette.text.primary,
  borderColor: palette.primary.main,
});

export const InputLabelItem = styled(InputLabel)({
  backgroundColor: palette.white.main,
  padding: "0 8px",
});

export const ButtonSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

export const FormArea = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
