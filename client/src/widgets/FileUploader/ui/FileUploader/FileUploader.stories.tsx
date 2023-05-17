import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { FileUploader } from './FileUploader';

export default {
    title: 'widgets/FileUploader',
    component: FileUploader,
} as ComponentMeta<typeof FileUploader>;

const Template: ComponentStory<typeof FileUploader> = (args) => <FileUploader {...args} />;

export const Idle = Template.bind({});
Idle.args = {

};
