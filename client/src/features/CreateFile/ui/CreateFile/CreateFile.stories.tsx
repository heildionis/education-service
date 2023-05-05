import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { CreateFile } from './CreateFile';

export default {
    title: 'features/CreateFile',
    component: CreateFile,
} as ComponentMeta<typeof CreateFile>;

const Template: ComponentStory<typeof CreateFile> = (args) => <CreateFile {...args} />;

export const Idle = Template.bind({});
Idle.args = {

};
