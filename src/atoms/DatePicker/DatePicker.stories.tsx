import { StoryFn, Meta } from '@storybook/react';
import { DatePicker } from './DatePicker';

export default {
  title: 'atoms/Calender',
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = () => <DatePicker />;

export const Default = Template.bind({});
