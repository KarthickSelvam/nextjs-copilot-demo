import React from 'react';
import { Meta, Story } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default Input',
  value: '',
  onChange: () => {},
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  label: 'Input with Placeholder',
  placeholder: 'Enter text...',
  value: '',
  onChange: () => {},
};
