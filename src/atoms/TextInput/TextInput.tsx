import React from "react";
import { TextField, FormHelperText, Box } from "@mui/material";
import { FullWidthFormControl } from "./TextInput.style";

interface TextInputProps {
  name: string;
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
  error?: boolean;
  helperText?: string;
  type?: React.HTMLInputTypeAttribute;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  style,
  error = false,
  helperText,
  type,
}) => {
  return (
    <FullWidthFormControl style={{ ...style }}>
      <TextField
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        variant="outlined"
        fullWidth
        type={type}
        error={error}
        helperText={helperText}
        style={{ ...style }}
      />
      <Box>{error && <FormHelperText>{helperText}</FormHelperText>}</Box>
    </FullWidthFormControl>
  );
};

export default TextInput;
