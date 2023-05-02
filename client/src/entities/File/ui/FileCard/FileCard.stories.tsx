import { ComponentStory, ComponentMeta } from '@storybook/react';

import { getMockedFile } from '../../testing';

import { FileCard } from './FileCard';

export default {
    title: 'entities/File/FileCard',
    component: FileCard,
} as ComponentMeta<typeof FileCard>;

const Template: ComponentStory<typeof FileCard> = (args) => <FileCard {...args} />;

export const File = Template.bind({});
File.args = {
    file: getMockedFile('file'),
};

export const FileTileView = Template.bind({});
FileTileView.args = {
    file: getMockedFile('file'),
    view: 'tile',
};

export const FileListView = Template.bind({});
FileListView.args = {
    file: getMockedFile('file'),
    view: 'list',
};

export const Dir = Template.bind({});
Dir.args = {
    file: getMockedFile('dir'),
};

export const DirTileView = Template.bind({});
DirTileView.args = {
    file: getMockedFile('dir'),
    view: 'tile',
};

export const DirListView = Template.bind({});
DirListView.args = {
    file: getMockedFile('dir'),
    view: 'list',
};
