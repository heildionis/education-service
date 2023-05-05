import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilePreviewList } from './FilePreviewList';

export default {
    title: '/FilePreviewList',
    component: FilePreviewList,
} as ComponentMeta<typeof FilePreviewList>;

const Template: ComponentStory<typeof FilePreviewList> = (args) => <FilePreviewList {...args} />;

export const Idle = Template.bind({});
Idle.args = {

};
