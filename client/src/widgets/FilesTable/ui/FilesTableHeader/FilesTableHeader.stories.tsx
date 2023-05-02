import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FilesTableHeader } from './FilesTableHeader';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

export default {
    title: 'widgets/FilesTable/FilesTableHeader',
    component: FilesTableHeader,
} as ComponentMeta<typeof FilesTableHeader>;

const Template: ComponentStory<typeof FilesTableHeader> = (args) => <FilesTableHeader {...args} />;

export const NormalViewTile = Template.bind({});
NormalViewTile.args = {

};
NormalViewTile.decorators = [StoreDecorator({ fileView: { view: 'tile' } })];

export const NormalViewList = Template.bind({});
NormalViewList.args = {

};
NormalViewList.decorators = [StoreDecorator({ fileView: { view: 'list' } })];

export const NoBackButton = Template.bind({});
NoBackButton.args = {
    currentDir: null,
};
NoBackButton.decorators = [StoreDecorator({ fileView: { view: 'tile' } })];
