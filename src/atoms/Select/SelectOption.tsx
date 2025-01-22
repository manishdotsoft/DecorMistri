import React, { useState } from "react";
import { FormHelperText } from "@mui/material";
import {
  FullWidthFormControl,
  InputLabelItem,
  SelectItem,
  OptionSelect,
  ContainerMain,
  ErrorMe,
  IconWrapper,
  SelectWrapper,
} from "./SelectOption.style";
import { FaCaretDown } from "react-icons/fa";

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
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContainerMain>
      <InputLabelItem
        htmlFor={name}
        isFocused={isFocused}
        hasValue={Boolean(value)}
      >
        {label}
      </InputLabelItem>
      <FullWidthFormControl>
        <SelectWrapper>
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
            <OptionSelect value="" disabled>
              Select an option
            </OptionSelect>
            {options.map((option) => (
              <OptionSelect key={option.value} value={option.value}>
                {option.label}
              </OptionSelect>
            ))}
          </SelectItem>
          <IconWrapper>
            <FaCaretDown size={16} />
          </IconWrapper>
        </SelectWrapper>
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
