import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FileOptions } from './FileOptions';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/FileOptions',
    component: FileOptions,
} as ComponentMeta<typeof FileOptions>;

const Template: ComponentStory<typeof FileOptions> = (args) => <FileOptions {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
