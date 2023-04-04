import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileViewSelector } from './FileViewSelector';

export default {
    title: 'shared/FileViewSelector',
    component: FileViewSelector,
} as ComponentMeta<typeof FileViewSelector>;

const Template: ComponentStory<typeof FileViewSelector> = (args) => <FileViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
