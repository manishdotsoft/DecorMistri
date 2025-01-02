import React from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  useTheme,
} from '@mui/material';

export interface RadioOption {
  label: string;
  value: string;
}

interface RadioButtonProps {
  label?: string;
  options: RadioOption[];
  selectedValue: string;
  onChange: (value: string) => void;
  name: string;
  direction: 'row' | 'column';
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  options,
  selectedValue,
  onChange,
  name,
  direction,
}) => {
  const theme: string | number | any = useTheme();
  console.log(theme);
  return (
    <FormControl>
      {label && (
        <FormLabel
          sx={{
            fontSize: theme.typography.h6.fontSize,
            color: theme.palette.primary.main,
          }}
        >
          {label}
        </FormLabel>
      )}
      <RadioGroup
        row={direction === 'row'}
        value={selectedValue}
        onChange={(event) => onChange(event.target.value)}
        name={name}
      >
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio />}
            label={option.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
