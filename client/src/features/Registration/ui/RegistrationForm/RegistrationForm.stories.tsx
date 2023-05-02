import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegistrationForm from './RegistrationForm';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'features/Registration/RegistrationForm',
    component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args) => <RegistrationForm {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({ })];
