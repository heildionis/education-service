import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropzone } from './Dropzone';

export default {
    title: 'shared/Dropzone',
    component: Dropzone,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => <Dropzone {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
