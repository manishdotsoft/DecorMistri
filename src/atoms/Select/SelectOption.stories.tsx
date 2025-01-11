import { Meta, StoryFn } from "@storybook/react";
import { Formik, Field, ErrorMessage } from "formik"; // Ensure ErrorMessage is imported for handling errors
import SelectOption from "./SelectOption";

export default {
  title: "Atoms/SelectOption",
  component: SelectOption,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Formik
        initialValues={{ example: "" }}
        validate={(values) => {
          const errors: { example?: string } = {};
          if (!values.example) {
            errors.example = "This field is required";
          }
          return errors;
        }}
        onSubmit={() => {}}
      >
        <Story />
      </Formik>
    ),
  ],
  argTypes: {
    name: { control: "text" },
    label: { control: "text" },
    options: {
      control: "object",
    },
  },
} as Meta<typeof SelectOption>;

const Template: StoryFn<typeof SelectOption> = (args) => (
  <>
    <Field name={args.name}>
      {({ field }: any) => <SelectOption {...args} {...field} />}
    </Field>
    <ErrorMessage name={args.name} component="div" style={{ color: "red" }} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  name: "example",
  label: "Select an Option",
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};

export const Error = Template.bind({});
Error.args = {
  name: "example",
  label: "Select an Option",
  options: [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ],
};
