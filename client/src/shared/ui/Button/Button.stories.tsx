import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Button',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
};

export const Clear = Template.bind({});
Clear.args = {
    variant: 'clear',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
    fullWidth: true,
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
    size: 'medium',
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
    variant: 'secondary',
    size: 'medium',
};

export const OutlinedMedium = Template.bind({});
OutlinedMedium.args = {
    variant: 'outlined',
    size: 'medium',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
    size: 'large',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
    variant: 'secondary',
    size: 'large',
};

export const OutlinedLarge = Template.bind({});
OutlinedLarge.args = {
    variant: 'outlined',
    size: 'large',
};

export const Disabled = Template.bind({});
Disabled.args = {
    disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
    variant: 'secondary',
    disabled: true,
};

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = {
    variant: 'outlined',
    disabled: true,
};

export const squareSmallPrimary = Template.bind({});
squareSmallPrimary.args = {
    children: '>',
    square: true,
    size: 'small',
    animationDuration: 1400,
};

export const squareMediumPrimary = Template.bind({});
squareMediumPrimary.args = {
    children: '>',
    square: true,
    size: 'medium',
    animationDuration: 1400,
};

export const squareLargePrimary = Template.bind({});
squareLargePrimary.args = {
    children: '>',
    square: true,
    size: 'large',
    animationDuration: 1400,
};

export const NoAnimation = Template.bind({});
NoAnimation.args = {
    isAnimated: false,
};
