import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginModal } from './LoginModal';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/AuthByUsername/LoginModal',
    component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};
Normal.decorators = [StoreDecorator({ })];
