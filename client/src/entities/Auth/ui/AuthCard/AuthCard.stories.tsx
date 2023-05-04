import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { AuthCard } from './AuthCard';

export default {
    title: 'entities/Auth/AuthCard',
    component: AuthCard,
} as ComponentMeta<typeof AuthCard>;

const Template: ComponentStory<typeof AuthCard> = (args) => <AuthCard {...args} />;

export const Idle = Template.bind({});
Idle.args = {

};
