import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilesController } from './FilesController';

export default {
    title: 'shared/Sidebar',
    component: FilesController,
} as ComponentMeta<typeof FilesController>;

const Template: ComponentStory<typeof FilesController> = (args) => <FilesController {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
