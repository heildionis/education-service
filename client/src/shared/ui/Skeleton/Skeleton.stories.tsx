import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Skeleton } from './Skeleton';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    width: 400,
    height: 400,
};

export const Rectangular = Template.bind({});
Rectangular.args = {
    width: 400,
    height: 400,
    variant: 'rectangular',
};

export const Circular = Template.bind({});
Circular.args = {
    width: 400,
    height: 400,
    variant: 'circular',
};

export const Rounded = Template.bind({});
Rounded.args = {
    width: 400,
    height: 400,
    variant: 'rounded',
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
};

export const Pulse = Template.bind({});
Pulse.args = {
    width: 500,
    height: 200,
    animation: 'pulse',
};

export const PulseRectangular = Template.bind({});
PulseRectangular.args = {
    width: 400,
    height: 400,
    variant: 'rectangular',
};

export const PulseCircular = Template.bind({});
PulseCircular.args = {
    width: 400,
    height: 400,
    variant: 'circular',
};

export const PulseRounded = Template.bind({});
PulseRounded.args = {
    width: 400,
    height: 400,
    variant: 'rounded',
};

export const PulseText = Template.bind({});
PulseText.args = {
    variant: 'text',
};

export const Wave = Template.bind({});
Wave.args = {
    width: 500,
    height: 200,
    animation: 'wave',
};

export const WaveRectangular = Template.bind({});
WaveRectangular.args = {
    width: 400,
    height: 400,
    variant: 'rectangular',
    animation: 'wave',
};

export const WaveCircular = Template.bind({});
WaveCircular.args = {
    width: 400,
    height: 400,
    variant: 'circular',
    animation: 'wave',
};

export const WaveRounded = Template.bind({});
WaveRounded.args = {
    width: 400,
    height: 400,
    variant: 'rounded',
    animation: 'wave',
};

export const WaveText = Template.bind({});
WaveText.args = {
    variant: 'text',
    animation: 'wave',
};

export const Disabled = Template.bind({});
Disabled.args = {
    width: 500,
    height: 200,
    animation: 'disabled',
};

export const DisabledRectangular = Template.bind({});
DisabledRectangular.args = {
    width: 400,
    height: 400,
    variant: 'rectangular',
    animation: 'disabled',
};

export const DisabledCircular = Template.bind({});
DisabledCircular.args = {
    width: 400,
    height: 400,
    variant: 'circular',
    animation: 'disabled',
};

export const DisabledRounded = Template.bind({});
DisabledRounded.args = {
    width: 400,
    height: 400,
    variant: 'rounded',
    animation: 'disabled',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
    variant: 'text',
    animation: 'disabled',
};
