import React from 'react';
import { Story, Meta } from '@storybook/react';
import AvatarPreview, {AvatarPreviewProps} from './AvatarPreview';

export default {
    title: 'Components/AvatarPreview',
    component: AvatarPreview,
} as Meta;

const Template: Story<AvatarPreviewProps> = (args) => <AvatarPreview {...args}/>;

export const Simple = Template.bind({});
Simple.args = {
    src: "https://getmemetemplates.com/wp-content/uploads/2020/06/Doggo-26.jpg",
    description: "Image uploaded",
    onClose: () => alert('Closing preview!'),
    onSliderChange: () => alert('Slider value change :o'),
    onSave: () => alert('Saving preview in a galaxy far far way...')
}