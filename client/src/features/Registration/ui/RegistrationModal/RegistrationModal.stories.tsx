import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RegistrationModal } from './RegistrationModal';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/Registration/RegistrationModal',
    component: RegistrationModal,
} as ComponentMeta<typeof RegistrationModal>;

const Template: ComponentStory<typeof RegistrationModal> = (args) => <RegistrationModal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};
Normal.decorators = [StoreDecorator({ })];
