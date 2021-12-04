import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ReactCodeBlock from '../componets/ReactCodeBlock';

export default {
  title: 'Example/CodeBlocks',
  component: ReactCodeBlock,
  argTypes: {
  },
} as ComponentMeta<typeof ReactCodeBlock>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof ReactCodeBlock> = (args) => <ReactCodeBlock {...args} />;

export const ReactCode = Template.bind({});
ReactCode.args = {
};
