import { Avatar, Props } from './Avatar';

import type { Meta, StoryFn } from '@storybook/react';



const meta = {
  title: 'Components/Shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} as Meta<typeof Avatar>;

export default meta;

const Template: StoryFn<typeof Avatar> = (props: Props) => {
  return (
    <div>
        <h2>Avatar</h2>
        <Avatar {...props} src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" alt="Colm Tuite" />
        <h2>Fallback</h2>
        <Avatar {...props} src="" alt="Colm Tuite" fallback="CT" />
    </div>
  )
}

export const Default = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};
