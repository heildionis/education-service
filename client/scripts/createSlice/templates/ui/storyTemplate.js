module.exports = (layer, componentName) => `import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { ${componentName} } from './${componentName}';

export default {
    title: '${layer}/${componentName}',
    component: ${componentName},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = (args) => <${componentName} {...args} />;

export const Idle = Template.bind({});
Idle.args = {
   
};`;
