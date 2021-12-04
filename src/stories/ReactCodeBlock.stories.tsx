/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CodeBlock from '../componets/CodeBlock';

export default {
  title: 'Example/CodeBlocks',
  component: CodeBlock.react,
  argTypes: {
  },
} as ComponentMeta<typeof CodeBlock.react>;

const Template: ComponentStory<typeof CodeBlock.react> = (args) => <CodeBlock.react {...args} />;

export const ReactCode = Template.bind({});
ReactCode.args = {
  code: '<Button className="btn" theme="primary" />',
};
