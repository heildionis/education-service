import { ComponentStory, ComponentMeta } from '@storybook/react';

import { mockFiles } from '../../testing';

import { FileList } from './FileList';

export default {
    title: 'entities/File/FileList',
    component: FileList,
} as ComponentMeta<typeof FileList>;

const Template: ComponentStory<typeof FileList> = (args) => <FileList {...args} />;

export const Tiles = Template.bind({});
Tiles.args = {
    files: mockFiles,
    view: 'tile',

};

export const TilesNoItems = Template.bind({});
TilesNoItems.args = {
    files: [],
    view: 'tile',
};

export const TilesIsLoading = Template.bind({});
TilesIsLoading.args = {
    files: mockFiles,
    view: 'tile',
    isLoading: true,
};

export const List = Template.bind({});
List.args = {
    files: mockFiles,
    view: 'list',
};

export const ListNoItems = Template.bind({});
ListNoItems.args = {
    files: [],
    view: 'list',
};

export const ListIsLoading = Template.bind({});
ListIsLoading.args = {
    files: mockFiles,
    view: 'list',
    isLoading: true,
};

export const WithRenderOptions = Template.bind({});
WithRenderOptions.args = {
    files: mockFiles,
    view: 'list',
    renderOptions: ((file: File) => () => <>renderOptions</>) as any,
};
