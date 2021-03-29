import React from 'react';
import { Story, Meta } from '@storybook/react';
import { AvatarError } from './AvatarError';
import { CloseButtonProps } from 'components/Button/CloseButton';

export default {
    title: 'Components/AvatarError',
    component: AvatarError,
} as Meta;

const Template: Story<CloseButtonProps> = (args) => <AvatarError {...args}/>;

export const Simple = Template.bind({});
Simple.args = {
    onClose: () => alert('BYEEEEEE')
}