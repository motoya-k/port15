import { Toggle, Props } from './Toggle';

import type { Meta, StoryFn } from '@storybook/react';



const meta = {
  title: 'Components/Shared/Toggle',
  component: Toggle,
  tags: ['autodocs'],
} as Meta<typeof Toggle>;

export default meta;

const Template: StoryFn<typeof Toggle> = (props: Props) => {
  return <div>
      <Toggle {...props}>a</Toggle>
  </div>
}

export const Default = Template.bind({});
