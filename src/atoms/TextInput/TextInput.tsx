import React from "react";
import {
  FormHelp,
  FullWidthFormControl,
  TextInputField,
} from "./TextInput.style";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import usePasswordVisibility from "./customHooks";

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
}

const TextInput: React.FC<TextInputProps> = ({
  name,
  value,
  onChange,
  onBlur,
  style,
  error = false,
  helperText,
  type = "text",
  placeholder,
}) => {
  const { isPasswordVisible, togglePasswordVisibility } =
    usePasswordVisibility();

  const inputType =
    type === "password" && !isPasswordVisible ? "password" : "text";

  return (
    <>
      <FullWidthFormControl style={{ position: "relative" }}>
        <TextInputField
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          type={inputType}
          style={{
            ...style,
            paddingRight: "30px",
          }}
          placeholder={placeholder}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            aria-label="Toggle password visibility"
            style={{
              position: "absolute",
              right: "-40px",
              top: "55%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
          </button>
        )}
      </FullWidthFormControl>
      {error && <FormHelp>{helperText}</FormHelp>}
    </>
  );
};

export default TextInput;
