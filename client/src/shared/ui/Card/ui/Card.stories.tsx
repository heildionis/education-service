import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from '../../Typography/Typography';

import { Card } from './Card';

export default {
    title: 'shared/Card',
    component: Card,
    args: {
        children: (
            <div>
                <Typography variant='h1'>There is a card content</Typography>
            </div>
        ),
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
};

export const Soft = Template.bind({});
Soft.args = {
    variant: 'soft',
};

export const Accent = Template.bind({});
Accent.args = {
    variant: 'accent',
};

export const Disabled = Template.bind({});
Disabled.args = {
    variant: 'disabled',
};
