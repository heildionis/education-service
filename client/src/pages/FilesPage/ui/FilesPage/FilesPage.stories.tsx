import { ComponentStory, ComponentMeta } from '@storybook/react';
import FilesPage from './FilesPage';

export default {
    title: 'shared/FilesPage',
    component: FilesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FilesPage>;

const Template: ComponentStory<typeof FilesPage> = (args) => <FilesPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
