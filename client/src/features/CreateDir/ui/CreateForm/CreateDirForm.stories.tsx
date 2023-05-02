import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CreateDirForm } from './CreateDirForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/CreateDir',
    component: CreateDirForm,
} as ComponentMeta<typeof CreateDirForm>;

const Template: ComponentStory<typeof CreateDirForm> = (args) => <CreateDirForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
