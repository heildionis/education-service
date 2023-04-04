import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileList } from './FileList';

export default {
    title: 'shared/FileList',
    component: FileList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FileList>;

const Template: ComponentStory<typeof FileList> = (args) => <FileList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
