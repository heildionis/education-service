import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUpload } from './FileUpload';

export default {
    title: 'shared/FileUpload',
    component: FileUpload,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
