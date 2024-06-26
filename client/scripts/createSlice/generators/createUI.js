const fs = require('fs/promises');

const firstCharToUpperCase = require('../lib/firstCharToUpperCase');
const resolveRoot = require('../lib/resolveRoot');
const componentTemplate = require('../templates/ui/componentTemplate');
const storyTemplate = require('../templates/ui/storyTemplate');
const styleTemplate = require('../templates/ui/styleTemplate');

module.exports = async (layer, sliceName) => {
    const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

    const createUIDir = async () => {
        try {
            await fs.mkdir(resolveUIPath());
        } catch (error) {
            console.log('UI dir wasnt created', error);
        }
    };

    const createComponent = async () => {
        try {
            const componentName = firstCharToUpperCase(sliceName);
            await fs.mkdir(resolveUIPath(componentName));
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.tsx`),
                componentTemplate(componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.stories.tsx`),
                storyTemplate(layer, componentName),
            );
            await fs.writeFile(
                resolveUIPath(componentName, `${componentName}.module.scss`),
                styleTemplate(componentName),
            );
        } catch (error) {
            console.log('Component wasnt created', error);
        }
    };

    await createUIDir();
    await createComponent();
};
