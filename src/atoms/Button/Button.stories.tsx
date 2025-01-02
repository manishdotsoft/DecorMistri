import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["text", "outlined", "contained"],
      },
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Primary Button",
  disabled: false,
  variant: "contained",
  color: "#fff",
  backgroundColor: "#0B9A64",
};

export const Custom = Template.bind({});
Custom.args = {
  title: "Custom Button",
  disabled: false,
  variant: "contained",
  color: "#fff",
  backgroundColor: "#0B9A64",
  style: {
    borderRadius: 10,
    width: 600,
  },
};

export const Outline = Template.bind({});
Outline.args = {
  title: "Secondary Button",
  disabled: false,
  variant: "outlined",
  color: "#0B9A64",
  backgroundColor: "#f8f9fa",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Button",
  disabled: true,
  variant: "contained",
  color: "#f8f9fa",
  backgroundColor: "#0B9A64",
};
