import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CodeBlock from '../componets/CodeBlock';

export default {
  title: 'Example/CodeBlocks',
  component: CodeBlock.CSS,
  argTypes: {
  },
} as ComponentMeta<typeof CodeBlock.CSS>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof CodeBlock.CSS> = (args) => <CodeBlock.CSS {...args} />;

export const CSSCode = Template.bind({});
CSSCode.args = {
  code: 'html {\n  display: flex;\n}',
};
