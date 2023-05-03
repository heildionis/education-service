import { addDecorator } from '@storybook/react';

import { RouteDecorator } from '../../src/shared/config/storybook/RouteDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            date: /Date$/,
        },
    },
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['app', 'app_light_theme'], color: '#F1F7FD' },
            { name: 'dark', class: ['app', 'app_light_theme'], color: '#0452ff' },
        ],
    },
};

addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
