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
  },
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Common = Template.bind({});
Common.args = {
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
