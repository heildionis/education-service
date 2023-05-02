import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilesController } from './FilesController';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/FileController',
    component: FilesController,
} as ComponentMeta<typeof FilesController>;

const Template: ComponentStory<typeof FilesController> = (args) => <FilesController {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
