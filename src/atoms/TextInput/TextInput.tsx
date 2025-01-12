import {
  FormHelp,
  FullWidthFormControl,
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
  type = 'text',
  placeholder,
}) => {
  return (
    <>
      <FullWidthFormControl style={{ ...style }}>
        <TextInputField
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={(e) => {
            if (onBlur) onBlur(e);
          }}
          type={type}
          style={{ ...style }}
          placeholder={placeholder}
        />
      </FullWidthFormControl>
      {error && <FormHelp>{helperText}</FormHelp>}
    </>
  );
};

export default TextInput;
