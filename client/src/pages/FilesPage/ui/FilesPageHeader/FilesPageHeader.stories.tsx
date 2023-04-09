import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilesPageHeader } from './FilesPageHeader';

export default {
    title: 'shared/FilesPageHeader',
    component: FilesPageHeader,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilesPageHeader>;

const Template: ComponentStory<typeof FilesPageHeader> = (args) => <FilesPageHeader />;

export const Normal = Template.bind({});
Normal.args = {

};
