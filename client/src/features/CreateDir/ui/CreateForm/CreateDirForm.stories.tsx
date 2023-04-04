import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CreateDirForm } from './CreateDirForm';

export default {
    title: 'feature/CreateDir',
    component: CreateDirForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CreateDirForm>;

const Template: ComponentStory<typeof CreateDirForm> = (args) => <CreateDirForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
