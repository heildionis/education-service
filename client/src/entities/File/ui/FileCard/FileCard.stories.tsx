import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileCard } from './FileCard';

export default {
    title: 'shared/FileCard',
    component: FileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof FileCard>;

const Template: ComponentStory<typeof FileCard> = (args) => <FileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
