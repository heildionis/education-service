import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Tag } from './Tag';

export default {
    title: 'shared/Tag',
    component: Tag,
    args: {
        children: 'Tag',
    },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};
export const PrimaryOutlined = Template.bind({});
PrimaryOutlined.args = {
    variant: 'outlined',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
};

export const SecondaryOutlined = Template.bind({});
SecondaryOutlined.args = {
    color: 'secondary',
    variant: 'outlined',
};

export const Error = Template.bind({});
Error.args = {
    color: 'error',
};

export const ErrorOutlined = Template.bind({});
ErrorOutlined.args = {
    color: 'error',
    variant: 'outlined',
};

export const Info = Template.bind({});
Info.args = {
    color: 'info',
};

export const InfoOutlined = Template.bind({});
InfoOutlined.args = {
    color: 'info',
    variant: 'outlined',
};

export const Success = Template.bind({});
Success.args = {
    color: 'success',
};

export const SuccessOutlined = Template.bind({});
SuccessOutlined.args = {
    color: 'success',
    variant: 'outlined',
};

export const Warning = Template.bind({});
Warning.args = {
    color: 'warning',
};

export const WarningOutlined = Template.bind({});
WarningOutlined.args = {
    color: 'warning',
    variant: 'outlined',
};

export const Small = Template.bind({});
Small.args = {
    variant: 'outlined',
    size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    variant: 'outlined',
    size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    variant: 'outlined',
    size: 'large',
};
