import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ReusableModal from './Modal';

export default {
  title: 'atoms/ReusableModal',
  component: ReusableModal,
  argTypes: {
    open: { control: 'boolean' },
    title: { control: 'text' },
    showCloseIcon: { control: 'boolean' },
    buttons: {
      control: 'object',
      description: 'Buttons to display in the modal',
    },
  },
} as Meta<typeof ReusableModal>;

const Template: StoryFn<typeof ReusableModal> = (args) => {
  const [open, setOpen] = useState(args.open);

  const handleModalClose = () => setOpen(false);

  const buttons = args.buttons || [
    {
      label: 'Skip',
      onClick: handleModalClose,
      style: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        width: '100px',
        borderRadius: '6px',
      },
    },
    {
      label: 'Update Now',
      onClick: () => console.log('Confirmed'),
      style: {
        backgroundColor: '#C7148A',
        color: '#fff',
        width: '160px',
        borderRadius: '6px',
      },
    },
  ];

  return (
    <ReusableModal
      {...args}
      open={open}
      onClose={handleModalClose}
      buttons={buttons}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
  title: 'Are you sure you want to proceed?',
  showCloseIcon: true,
  buttons: [
    {
      label: 'Skip',
      onClick: () => console.log('Skipped'),
      style: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        width: '100px',
        borderRadius: '6px',
      },
    },
    {
      label: 'Update Now',
      onClick: () => console.log('Confirmed'),
      style: {
        backgroundColor: '#C7148A',
        color: '#fff',
        width: '160px',
        borderRadius: '6px',
      },
    },
  ],
};

export const NoCloseIcon = Template.bind({});
NoCloseIcon.args = {
  open: true,
  title: 'Please Confirm',
  showCloseIcon: true,

  buttons: [],
};
