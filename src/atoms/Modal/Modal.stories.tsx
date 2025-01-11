import { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Modal, { ModalProps } from './Modal';
import { Typography } from '@mui/material';

export default {
  title: 'Atoms/Modal',
  component: Modal,
  argTypes: {
    onClose: { action: 'closed' },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<ModalProps> = (args) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal {...args} open={open} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Example Modal',
  children: <Typography>This is a simple modal.</Typography>,
};
