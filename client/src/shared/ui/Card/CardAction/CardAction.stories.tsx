import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CardAction } from './CardAction';

export default {
    title: 'shared/CardAction',
    component: CardAction,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CardAction>;

const Template: ComponentStory<typeof CardAction> = (args) => <CardAction {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
