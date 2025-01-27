import { Meta, StoryFn } from "@storybook/react";
import Loader, { LoaderProps } from "./Loader";

export default {
  title: "Atoms/Loader",
  component: Loader,
  argTypes: {
    message: { control: "text" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} as Meta<typeof Loader>;

const Template: StoryFn<LoaderProps> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "Loading, please wait...",
  size: "medium",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const NoMessage = Template.bind({});
NoMessage.args = {
  message: "",
  size: "medium",
};
