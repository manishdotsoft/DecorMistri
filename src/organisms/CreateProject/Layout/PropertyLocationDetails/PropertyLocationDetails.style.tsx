import { styled } from "@mui/system";
import { Box, FormControl, InputLabel, Radio } from "@mui/material";
import palette from "../../../../thems/primitives/palette";
import typeset from "../../../../thems/primitives/typeset";
import { COMMON_PAPER } from "../../../../thems/primitives/colors";

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

interface StyledLabelProps {
  selected: boolean;
}

export const StyledLabel = styled("label")<StyledLabelProps>(
  ({ theme, selected }) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",

    border: `3px solid ${
      selected ? theme.palette.primary.main : theme.palette.grey[900]
    }`,
    borderRadius: "8px",
    borderColor: selected ? theme.palette.primary.light : COMMON_PAPER,
    color: selected ? theme.palette.primary.main : theme.palette.text.secondary,
    fontWeight: selected ? "600" : "400",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginRight: "8px",
    gap: "8px",
    fontSize: "14px",
    marginLeft: "12px",
  })
);

export const StyledRadio = styled(Radio)(() => ({
  display: "none",
}));

export const ButtonSection = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});
