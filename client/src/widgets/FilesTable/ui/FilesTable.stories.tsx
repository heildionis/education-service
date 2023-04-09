import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FilesTable } from './FilesTable';

export default {
    title: 'shared/FilesTable',
    component: FilesTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilesTable>;

const Template: ComponentStory<typeof FilesTable> = (args) => <FilesTable {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
