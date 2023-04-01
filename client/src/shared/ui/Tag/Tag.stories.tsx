import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tag } from './Tag';

export default {
    title: 'shared/Tag',
    component: Tag,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
