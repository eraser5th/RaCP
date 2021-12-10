import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Heading from '../componets/Heading';

export default {
  title: 'Example/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Lv1Header = Template.bind({});
Lv1Header.args = {
  text: 'Level 1 Header',
  level: 1,
};

export const Lv2Header = Template.bind({});
Lv2Header.args = {
  text: 'Level 2 Header',
  level: 2,
};

export const Lv3Header = Template.bind({});
Lv3Header.args = {
  text: 'Level 3 Header',
  level: 3,
};

export const Lv4Header = Template.bind({});
Lv4Header.args = {
  text: 'Level 4 Header',
  level: 4,
};

export const Lv5Header = Template.bind({});
Lv5Header.args = {
  text: 'Level 5 Header',
  level: 5,
};

export const Lv6Header = Template.bind({});
Lv6Header.args = {
  text: 'Level 6 Header',
  level: 6,
};
