import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { FilePreviewDelete } from './FilePreviewDelete';

export default {
    title: 'features/FilePreviewDelete',
    component: FilePreviewDelete,
} as ComponentMeta<typeof FilePreviewDelete>;

const Template: ComponentStory<typeof FilePreviewDelete> = (args) => <FilePreviewDelete {...args} />;

export const Idle = Template.bind({});
Idle.args = {
   
};