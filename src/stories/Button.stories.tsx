import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../componets/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    theme: {
      control: 'select',
      options: [
        'primary', 'light', 'secondary', 'success', 'danger', 'warning', 'info', 'dark',
      ],
    },
    size: {
      control: 'radio',
      options: [
        'sm', 'md', 'lg',
      ],
    },
    rounded: {
      control: 'boolean',
    },
    withArrow: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  size: 'md',

};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Button',
};

export const LongLabel = Template.bind({});
LongLabel.args = {
  label: 'Looooooooooooonnnnng Laaaaabeeeeeeeel Fooooooooooooooooo ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑',
};

export const Light = Template.bind({});
Light.args = {
  label: 'Button',
  theme: 'light',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  theme: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
  label: 'Button',
  theme: 'success',
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Button',
  rounded: true,
};

export const Arrow = Template.bind({});
Arrow.args = {
  label: 'Button',
  withArrow: true,
};
