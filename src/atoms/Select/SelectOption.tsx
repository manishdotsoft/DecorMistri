import React from "react";
import { SelectChangeEvent, FormHelperText } from "@mui/material";
import {
  FullWidthFormControl,
  InputLabelItem,
  OptionSelect,
  SelectItem,
} from "./SelectOption.style";

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
    <>
      <FullWidthFormControl style={{ ...style }} error={error}>
        <InputLabelItem htmlFor={name} style={{ ...style }}>
          {label}
        </InputLabelItem>
        <SelectItem
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          label={label}
          style={{ ...style }}
        >
          {options.map((option) => (
            <OptionSelect key={option.value} value={option.value}>
              {option.label}
            </OptionSelect>
          ))}
        </SelectItem>
        {error && <FormHelperText>{helperText}</FormHelperText>}
      </FullWidthFormControl>
    </>
  );
};

export default SelectOption;
