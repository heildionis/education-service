import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import FilesPage from './FilesPage';

import { mockFiles } from '@/entities/File/testing';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'pages/FilesPage/FilesPage',
    component: FilesPage,
    decorators: [withMock],
} as ComponentMeta<typeof FilesPage>;

const Template: ComponentStory<typeof FilesPage> = (args) => <FilesPage />;

export const Normal = Template.bind({});
Normal.args = {
};
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
