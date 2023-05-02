import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import { FilesTable } from './FilesTable';

import { mockFiles } from '@/entities/File/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/FilesTable/FilesTable',
    component: FilesTable,
    decorators: [withMock],
} as ComponentMeta<typeof FilesTable>;

const Template: ComponentStory<typeof FilesTable> = (args) => <FilesTable {...args} />;

export const Normal = Template.bind({});
Normal.args = { parentId: null };
Normal.decorators = [StoreDecorator({})];
Normal.parameters = {
    mockData: [{
        url: `${__API__}/file`,
        method: 'GET',
        status: 200,
        response: {
            files: mockFiles,
            folder: {
                parentId: null,
            },
        },
    }],
};
