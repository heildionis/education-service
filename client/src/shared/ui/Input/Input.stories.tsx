import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from './Input';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/themes';

export default {
    title: 'shared/Input',
    component: Input,
    args: {
        placeholder: 'Input....',
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
