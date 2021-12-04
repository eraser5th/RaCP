import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../componets/Button';
import ComponentViewCard from '../componets/ComponentViewCard';
import Card from '../componets/Card';

export default {
  title: 'Example/ComponentViewCard',
  component: ComponentViewCard,
  argTypes: {
    rounded: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof ComponentViewCard>;

const Template: ComponentStory<
    typeof ComponentViewCard
// eslint-disable-next-line react/jsx-props-no-spreading
    > = (args) => <ComponentViewCard {...args} />;

export const ButtonCard = Template.bind({});
ButtonCard.args = {
  child: <Button label="button" />,
  title: 'aaa',
};

export const CardCard = Template.bind({});
CardCard.args = {
  child: <Card />,
  title: 'card',
};
