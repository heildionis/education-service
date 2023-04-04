import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileOptions } from './FileOptions';

export default {
    title: 'shared/FileOptions',
    component: FileOptions,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FileOptions>;

const Template: ComponentStory<typeof FileOptions> = (args) => <FileOptions {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
