import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileUpload } from './FileUpload';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'shared/FileUpload',
    component: FileUpload,
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => <FileUpload {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    parentId: 1,
};
Normal.decorators = [StoreDecorator({})];
