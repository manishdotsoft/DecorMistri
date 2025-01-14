import { styled } from "@mui/system";

interface InputLabelItemProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const FullWidthFormControl = styled("div")({
  position: "relative",
  width: "100%",
  // marginBottom: "16px",
});

export const InputLabelItem = styled("label")<InputLabelItemProps>(
  ({ isFocused, hasValue }) => ({
    position: "absolute",
    left: "12px",
    top: hasValue || isFocused ? "-10px" : "38%",
    transform:
      hasValue || isFocused
        ? "translateY(-2px) scale(0.85)"
        : "translateY(-50%)",
    transition: "all 0.2s ease-in-out",
    fontSize: "16px",
    color: isFocused ? "#0fb34e" : hasValue ? "#757575" : "#757575",
    background: "white",
    pointerEvents: "none",
    padding: "3px",
  })
);

export const TextInputField = styled("input")({
  padding: "18px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "16px",
  backgroundColor: "#fff",
  outline: "none",
  "&:focus": {
    borderColor: "#0fb34e",
    border: "2px solid #0fb34e",
  },
});

export const FormHelp = styled("p")({
  color: "red",
});
