import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilePreview } from './FilePreview';

export default {
    title: 'shared/FilePreview',
    component: FilePreview,
} as ComponentMeta<typeof FilePreview>;

const Template: ComponentStory<typeof FilePreview> = (args) => <FilePreview {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
