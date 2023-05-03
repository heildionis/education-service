import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

export default {
    title: 'shared/Typography',
    component: Typography,
    args: {
        children: 'Typography',
    },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
};

export const Accent = Template.bind({});
Accent.args = {
    color: 'accent',
};

export const Soft = Template.bind({});
Soft.args = {
    color: 'soft',
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: 'disabled',
};

export const H1 = Template.bind({});
H1.args = {
    variant: 'h1',
};

export const H2 = Template.bind({});
H2.args = {
    variant: 'h2',
};

export const H3 = Template.bind({});
H3.args = {
    variant: 'h3',
};

export const H4 = Template.bind({});
H4.args = {
    variant: 'h4',
};

export const H5 = Template.bind({});
H5.args = {
    variant: 'h5',
};

export const H6 = Template.bind({});
H6.args = {
    variant: 'h6',
};
export const P = Template.bind({});
P.args = {
    variant: 'p',
};
export const Title = Template.bind({});
Title.args = {
    variant: 'title',
};
export const Subtitle = Template.bind({});
Subtitle.args = {
    variant: 'subtitle',
};

export const AlignCenter = Template.bind({});
AlignCenter.args = {
    align: 'center',
};

export const AlignInherit = Template.bind({});
AlignInherit.args = {
    align: 'inherit',
};

export const AlignLeft = Template.bind({});
AlignLeft.args = {
    align: 'left',
};

export const AlignRight = Template.bind({});
AlignRight.args = {
    align: 'right',
};
