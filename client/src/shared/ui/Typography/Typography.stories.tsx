import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Typography } from './Typography';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/themes';

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
    variant: 'div',
    color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'div',
    color: 'secondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    variant: 'div',
    color: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    variant: 'div',
    color: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const h1 = Template.bind({});
h1.args = {
    variant: 'h1',
};

export const h2 = Template.bind({});
h2.args = {
    variant: 'h2',
};

export const h3 = Template.bind({});
h3.args = {
    variant: 'h3',
};

export const h4 = Template.bind({});
h4.args = {
    variant: 'h4',
};

export const h5 = Template.bind({});
h5.args = {
    variant: 'h5',
};

export const h6 = Template.bind({});
h6.args = {
    variant: 'h6',
};
export const p = Template.bind({});
p.args = {
    variant: 'p',
};
export const title = Template.bind({});
title.args = {
    variant: 'title',
};
export const subtitle = Template.bind({});
subtitle.args = {
    variant: 'subtitle',
};

export const alignCenter = Template.bind({});
alignCenter.args = {
    align: 'center',
};

export const alignInherit = Template.bind({});
alignInherit.args = {
    align: 'inherit',
};

export const alignLeft = Template.bind({});
alignLeft.args = {
    align: 'left',
};

export const alignRight = Template.bind({});
alignRight.args = {
    align: 'right',
};
