import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileProgress } from './FileProgress';

export default {
    title: 'entities/File/FileProgress',
    component: FileProgress,
} as ComponentMeta<typeof FileProgress>;

const Template: ComponentStory<typeof FileProgress> = (args) => <FileProgress {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
