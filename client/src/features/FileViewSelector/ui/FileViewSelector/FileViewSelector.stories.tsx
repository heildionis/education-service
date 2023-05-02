import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileViewSelector } from './FileViewSelector';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/FileViewSelector',
    component: FileViewSelector,
} as ComponentMeta<typeof FileViewSelector>;

const Template: ComponentStory<typeof FileViewSelector> = (args) => <FileViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
