import TextInput from './TextInput';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],

  argTypes: {
    label: { contro: 'text' },
    placeholder: { control: 'text' },
    backgroundColor: { control: 'color' },
    labelColor: { control: 'color' },
    labelFontSize: { control: 'text' },
    inputWidth: { control: 'text' },
    inputPadding: { control: 'text' },
    inputBorderColor: { control: 'color' },
    inputBorderRadius: { control: 'text' },
    inputFontSize: { control: 'text' },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};
export const FullName = {
  args: {
    label: 'Full Name',
    placeholder: 'Enter Your Name',
    type: 'text',
    backgroundColor: '#8adb4c',
    labelColor: '#1d1dbb',
    inputBorderColor: '#098b2b',
    inputPadding: '12px',
    inputBorderRadius: '8px',
    inputFontSize: '14px',
  },
};

export const Email = {
  args: {
    label: 'Enter Email',
    placeholder: 'Enter Your Email',
    type: 'email',
    backgroundColor: '#f9f9f9',
    labelColor: '#333',
    inputBorderColor: '#007BFF',
    inputPadding: '12px',
    inputBorderRadius: '8px',
    inputFontSize: '14px',
  },
};

export const Password = {
  args: {
    label: 'Password',
    placeholder: 'Enter Your Password',
    type: 'password',
    backgroundColor: '#fff3cd',
    labelColor: '#856404',
    inputBorderColor: '#856404',
    inputPadding: '12px',
    inputBorderRadius: '8px',
    inputFontSize: '14px',
  },
};

export const NumberInput = {
  args: {
    label: 'Age',
    placeholder: 'Enter Your Age',
    type: 'number',
    backgroundColor: '#e0f7fa',
    labelColor: '#004d40',
    inputBorderColor: '#004d40',
    inputPadding: '10px',
    inputBorderRadius: '6px',
    inputFontSize: '14px',
  },
};
