import React, { useState } from 'react';
import { FormHelperText } from '@mui/material';
import {
  FullWidthFormControl,
  InputLabelItem,
  SelectItem,
  OptionSelect,
  ContainerMain,
  ErrorMe,
  IconWrapper,
  SelectWrapper,
} from './SelectOption.style';
import SelectDownArrow from '../../assets/images/logo/SelectDownArrow.svg';

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
  defaultOption?: string;
  containerMainStyle?: React.CSSProperties;
  selectInputStyle?: React.CSSProperties;
  starIcon?: React.ReactNode;
  labelStyle?: React.CSSProperties;
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
  defaultOption,
  containerMainStyle,
  labelFontSize,
  selectInputStyle,
  starIcon,
  labelStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <ContainerMain style={{ ...containerMainStyle }}>
      <InputLabelItem
        htmlFor={name}
        isFocused={isFocused}
        hasValue={Boolean(value)}
        fontSize={labelFontSize}
        sx={labelStyle}
      >
        {starIcon}
        {label}
      </InputLabelItem>
      <FullWidthFormControl>
        <SelectWrapper>
          <SelectItem
            id={name}
            name={name}
            value={value || ''}
            onChange={onChange}
            onBlur={(e) => {
              setIsFocused(false);
              if (onBlur) onBlur(e);
            }}
            onFocus={() => setIsFocused(true)}
            style={{ ...style }}
            sx={selectInputStyle}
          >
            <OptionSelect value="" disabled>
              {defaultOption}
            </OptionSelect>
            {options.map((option) => (
              <OptionSelect key={option.value} value={option.value}>
                {option.label}
              </OptionSelect>
            ))}
          </SelectItem>
          <IconWrapper>
            <img src={SelectDownArrow} alt="" />
          </IconWrapper>
        </SelectWrapper>
      </FullWidthFormControl>
      <ErrorMe>
        {error && (
          <FormHelperText sx={{ color: 'red' }}>{helperText}</FormHelperText>
        )}
      </ErrorMe>
    </ContainerMain>
  );
};

export default SelectOption;
