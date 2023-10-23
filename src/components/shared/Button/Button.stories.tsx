import { Button, Props } from './Button';

import type { Meta, StoryFn } from '@storybook/react';



const meta = {
  title: 'Components/Shared/Button',
  component: Button,
  tags: ['autodocs'],
} as Meta<typeof Button>;

export default meta;

const Template: StoryFn<typeof Button> = (props: Props) => {
  return <div>
    <h1>Buttons</h1>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="primary">button</Button>
      <Button {...props} color="primary" variant="outlined">button</Button>
      <Button {...props} color="primary" variant="text">button</Button>
    </div>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="secondary">button</Button>
      <Button {...props} color="secondary" variant="outlined">button</Button>
      <Button {...props} color="secondary" variant="text">button</Button>
    </div>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="success">button</Button>
      <Button {...props} color="success" variant="outlined">button</Button>
      <Button {...props} color="success" variant="text">button</Button>
    </div>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="error">button</Button>
      <Button {...props} color="error" variant="outlined">button</Button>
      <Button {...props} color="error" variant="text">button</Button>
    </div>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="info">button</Button>
      <Button {...props} color="info" variant="outlined">button</Button>
      <Button {...props} color="info" variant="text">button</Button>
    </div>
    <div className='m-4 flex justify-between'>
      <Button {...props} color="warning">button</Button>
      <Button {...props} color="warning" variant="outlined">button</Button>
      <Button {...props} color="warning" variant="text">button</Button>
    </div>
  </div>
}

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};
