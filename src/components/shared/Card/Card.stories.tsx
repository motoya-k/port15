import { Card, Props } from './Card';

import type { Meta, StoryFn } from '@storybook/react';



const meta = {
  title: 'Components/Shared/Card',
  component: Card,
  tags: ['autodocs'],
} as Meta<typeof Card>;

export default meta;

const Template: StoryFn<typeof Card> = (props: Props) => {
  return <div>
      <Card {...props}>
        abc<br />
        def<br />
        ghi
      </Card>
  </div>
}

export const Default = Template.bind({});
