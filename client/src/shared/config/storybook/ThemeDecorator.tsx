import { Story } from '@storybook/react';

import { ThemeProvider } from '@/app/providers/ThemeProvider/testing';
import { Theme } from '@/shared/lib/themes';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
