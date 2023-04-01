import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PageError } from './PageError';

export default {
    title: 'shared/PageError',
    component: PageError,
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
