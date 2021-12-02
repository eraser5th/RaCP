import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from '../componets/Card';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    rounded: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof Card>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const TestCard = Template.bind({});
TestCard.args = {
  title: 'test title',
  explain: 'test explain test explain test explain test explain test explain test explain test explain test explain test explain ',
};

export const LongExplain = Template.bind({});
LongExplain.args = {
  title: 'test title',
  explain: 'test explain test explain test explain test explain test explain test explain test explain test explain test explaintest explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain test explain  ',
};

export const ImageCard = Template.bind({});
ImageCard.args = {
  image: 'https://2.bp.blogspot.com/-b5xF1YTPEo4/VaMNfzznp9I/AAAAAAAAvYk/ByubINYOiXI/s800/girl_20.png',
  title: 'image',
  explain: 'test image test image',
};

export const RoundedCard = Template.bind({});
RoundedCard.args = {
  image: 'https://2.bp.blogspot.com/-b5xF1YTPEo4/VaMNfzznp9I/AAAAAAAAvYk/ByubINYOiXI/s800/girl_20.png',
  title: 'image',
  explain: 'test image test image',
  rounded: true,
};
