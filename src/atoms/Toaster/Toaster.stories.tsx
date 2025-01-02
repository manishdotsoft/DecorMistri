import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Toaster, { ToasterProps } from "./Toaster";

export default {
  title: "Atoms/Toaster",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    message: { control: "text" },
    type: {
      control: { type: "select" },
      options: ["success", "info", "warning", "error"],
    },
    open: { control: "boolean" },
  },
} as Meta<typeof Toaster>;

const Template: StoryFn<ToasterProps> = (args) => {
  const [open, setOpen] = useState(args.open);

  const handleClose = () => {
    setOpen(false);
  };

  return <Toaster {...args} open={open} onClose={handleClose} />;
};

export const Success = Template.bind({});
Success.args = {
  message: "Operation was successful!",
  type: "success",
  open: true,
};

export const Error = Template.bind({});
Error.args = {
  message: "Something went wrong!",
  type: "error",
  open: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: "This is a warning!",
  type: "warning",
  open: true,
};

export const Info = Template.bind({});
Info.args = {
  message: "Here is some information.",
  type: "info",
  open: true,
};
