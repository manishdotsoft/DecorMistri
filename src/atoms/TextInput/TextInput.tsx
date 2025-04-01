import React from 'react';
import {
  FormHelp,
  FullWidthFormControl,
  TextInputField,
} from './TextInput.style';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import usePasswordVisibility from './customHooks';
import { Box } from '@mui/system';

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
  placeholder?: string;
  eyePadding?: React.CSSProperties;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  VisibilityStyle?: React.CSSProperties;
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  onBlur,
  style,
  error = false,
  helperText,
  type,
  placeholder,
  eyePadding,
  onKeyDown,
  VisibilityStyle,
}) => {
  const { isPasswordVisible, togglePasswordVisibility } =
    usePasswordVisibility();

  const inputType =
    type === 'password' && !isPasswordVisible
      ? 'password'
      : type === 'number'
        ? 'number'
        : 'text';

  return (
    <Box>
      <FullWidthFormControl>
        <TextInputField
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={inputType}
          style={{
            ...style,
          }}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
            style={{
              position: 'absolute',
              right: '6px',
              top: '62%',
              transform: 'translateY(-50%)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              ...VisibilityStyle,
            }}
          >
            {isPasswordVisible ? (
              <Visibility style={eyePadding} />
            ) : (
              <VisibilityOff style={eyePadding} />
            )}
          </button>
        )}
      </FullWidthFormControl>
      {error && <FormHelp>{helperText}</FormHelp>}
    </Box>
  );
};

export default TextInput;
