import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Divider } from './Divider';

export default {
    title: 'shared/Divider',
    component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
    color: 'primary',
    variant: 'small',
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    color: 'primary',
    variant: 'medium',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    color: 'primary',
    variant: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
    variant: 'small',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    variant: 'medium',
    color: 'secondary',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    color: 'secondary',
    variant: 'large',
};

export const Soft = Template.bind({});
Soft.args = {
    color: 'soft',
};

export const SoftSmall = Template.bind({});
SoftSmall.args = {
    variant: 'small',
    color: 'soft',
};

export const SoftMedium = Template.bind({});
SoftMedium.args = {
    color: 'soft',
    variant: 'medium',
};

export const SoftLarge = Template.bind({});
SoftLarge.args = {
    color: 'soft',
    variant: 'large',
};

export const Accent = Template.bind({});
Accent.args = {
    color: 'accent',
};

export const AccentSmall = Template.bind({});
AccentSmall.args = {
    variant: 'small',
    color: 'accent',
};

export const AccentMedium = Template.bind({});
AccentMedium.args = {
    color: 'accent',
    variant: 'medium',
};

export const AccentLarge = Template.bind({});
AccentLarge.args = {
    color: 'accent',
    variant: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
    color: 'disabled',
};

export const DisabledSmall = Template.bind({});
DisabledSmall.args = {
    variant: 'small',
    color: 'disabled',
};

export const DisabledMedium = Template.bind({});
DisabledMedium.args = {
    color: 'disabled',
    variant: 'medium',
};

export const DisabledLarge = Template.bind({});
DisabledLarge.args = {
    color: 'disabled',
    variant: 'large',
};
