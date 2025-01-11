import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextInput from './TextInput';
import { Box } from '@mui/material';

export default {
  title: 'Atoms/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    type: {
      control: {
        type: 'select',
        options: ['text', 'password', 'email', 'tel'],
      },
    },
  },
} as Meta<typeof TextInput>;

const Template: StoryFn<typeof TextInput> = (args) => {
  const [value, setValue] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <Box sx={{ maxWidth: 400 }}>
      <TextInput {...args} value={value} onChange={handleChange} />
    </Box>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: 'default',
  label: 'Default Input',
  value: '',
  helperText: '',
  error: false,
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  name: 'error',
  label: 'Error Input',
  value: '',
  error: true,
  helperText: 'This field is required.',
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  name: 'password',
  label: 'Password',
  value: '',
  type: 'password',
  helperText: 'Password should be at least 8 characters.',
  error: false,
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  name: 'email',
  label: 'Email Address',
  value: '',
  type: 'email',
  helperText: 'Enter a valid email address.',
  error: false,
};

export const PhoneInput = Template.bind({});
PhoneInput.args = {
  name: 'phone',
  label: 'Phone Number',
  value: '',
  type: 'tel',
  helperText: 'Enter a valid phone number.',
  error: false,
};
