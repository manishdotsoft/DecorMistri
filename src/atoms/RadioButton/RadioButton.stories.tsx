import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RadioButton, { RadioOption } from './RadioButton';

export default {
  title: 'Atoms/RadioButton',
  component: RadioButton,
  argTypes: {
    type: { control: 'radio' },
    direction: {
      control: { type: 'radio' },
      options: ['row', 'column'],
    },
    label: { control: 'text' },
    name: { control: 'text' },
    options: { control: 'object' },
    selectedValue: { control: 'text' },
    onChange: { action: 'changed' },
  },
} as Meta<typeof RadioButton>;

const Template: StoryFn<typeof RadioButton> = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  return (
    <RadioButton
      {...args}
      selectedValue={selectedValue}
      onChange={(value) => setSelectedValue(value)}
    />
  );
};

const defaultOptions: RadioOption[] = [
  { label: 'Button 1', value: 'Button1' },
  { label: 'Button 2', value: 'Button2' },
  { label: 'Button 3', value: 'Button3' },
];

export const RadioRow = Template.bind({});
RadioRow.args = {
  label: 'Choose a Button',
  options: defaultOptions,
  selectedValue: 'Button1',
  name: 'example-radio',
  direction: 'row',
};

export const RadioColumn = Template.bind({});
RadioColumn.args = {
  label: 'Choose a Button',
  options: defaultOptions,
  selectedValue: 'Button1',
  name: 'example-radio',
  direction: 'column',
};
