import React, { useState } from 'react';
import {
  FormHelp,
  FullWidthFormControl,
  InputLabelItem,
  TextInputField,
} from './TextInput.style';

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
  type = 'text',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <FullWidthFormControl style={{ ...style }}>
        <InputLabelItem
          htmlFor={name}
          isFocused={isFocused}
          hasValue={Boolean(value)}
        >
          {label}
        </InputLabelItem>
        <TextInputField
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          type={type}
          style={{ ...style }}
        />
      </FullWidthFormControl>
      {error && <FormHelp>{helperText}</FormHelp>}
    </>
  );
};

export default TextInput;
