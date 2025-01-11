import React from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { FullWidthFormControl } from "./SelectOption.style";

interface SelectOptionProps {
  name: string;
  label: string;
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (event: SelectChangeEvent<string | number>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
  error?: boolean;
  helperText?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  onBlur,
  style,
  error,
  helperText,
}) => {
  return (
    <FullWidthFormControl variant="outlined" style={{ ...style }} error={error}>
      <InputLabel htmlFor={name} style={{ ...style }}>
        {label}
      </InputLabel>
      <Select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        style={{ ...style }}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <FormHelperText>{helperText}</FormHelperText>}
    </FullWidthFormControl>
  );
};

export default SelectOption;
