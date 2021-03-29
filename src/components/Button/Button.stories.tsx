import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args}/>;

export const Simple = Template.bind({});
Simple.args = {
    description: "I'm simple! :D",
    onClick: () => alert("Thanks for clicking on me!")
}
