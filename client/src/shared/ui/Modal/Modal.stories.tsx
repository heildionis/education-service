import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib/themes';
import { Typography } from '../Typography/Typography';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: (
            <div>
                <div><Typography variant='h1'>Modal content here..</Typography></div>
                <div><Typography variant='h4' align='center'>You can use everythin you want</Typography></div>
            </div>
        ),
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    isOpen: true,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
