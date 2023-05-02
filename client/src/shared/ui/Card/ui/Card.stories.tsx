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

export const Normal = Template.bind({});
Normal.args = {

};
