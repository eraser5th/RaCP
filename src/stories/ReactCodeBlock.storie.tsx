import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReactCodeBlock from '../componets/ReactCodeBlock';

export default {
  title: 'Example/Card',
  component: ReactCodeBlock,
  argTypes: {
    rounded: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof ReactCodeBlock>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ReactCodeBlock> = (args) => <ReactCodeBlock {...args} />;

export const TestCard = Template.bind({});
TestCard.args = {
};
