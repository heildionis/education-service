import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Navbar } from './Navbar';

import { User } from '@/entities/User';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];

export const Auth = Template.bind({});
Auth.args = {

};
Auth.decorators = [StoreDecorator({ user: { authData: {} as User } })];
