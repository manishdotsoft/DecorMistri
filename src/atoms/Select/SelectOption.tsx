import React, { useState } from "react";
import { FormHelperText } from "@mui/material";
import {
  FullWidthFormControl,
  InputLabelItem,
  SelectItem,
  OptionSelect,
  ContainerMain,
  ErrorMe,
} from "./SelectOption.style";
import { theme } from "../../thems/primitives/theme";

interface SelectOptionProps {
  name: string;
  label: string;
  options: { value: string | number; label: string }[];
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  style?: React.CSSProperties;
  error?: boolean;
  helperText?: string;
  labelFontSize?: string;
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
  labelFontSize,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContainerMain>
      <FullWidthFormControl>
        <InputLabelItem
          htmlFor={name}
          isFocused={isFocused}
          hasValue={Boolean(value)}
          style={{ fontSize: "0.8rem" }}
        >
          {label}
        </InputLabelItem>
        <SelectItem
          id={name}
          name={name}
          value={value || ""}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          style={{ ...style }}
        >
          <OptionSelect value="" disabled></OptionSelect>
          {options.map((option) => (
            <OptionSelect key={option.value} value={option.value}>
              {option.label}
            </OptionSelect>
          ))}
        </SelectItem>
      </FullWidthFormControl>
      <ErrorMe>
        {error && (
          <FormHelperText sx={{ color: "red" }}>{helperText}</FormHelperText>
        )}
      </ErrorMe>
    </ContainerMain>
  );
};

export default SelectOption;
