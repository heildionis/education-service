const fs = require('fs/promises');

const resolveRoot = require('../lib/resolveRoot');
const schemaTypeTemplate = require('../templates/model/schemaTypeTemplate');
const reduxSliceTemplate = require('../templates/model/sliceTemplate');

module.exports = async (layer, sliceName) => {
    const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments);

    const generateDirTemplate = async () => {
        try {
            await fs.mkdir(resolveModelPath());
            await fs.mkdir(resolveModelPath('types'));
            await fs.mkdir(resolveModelPath('slice'));
            await fs.mkdir(resolveModelPath('selectors'));
            await fs.mkdir(resolveModelPath('services'));
        } catch (error) {
            console.log('Папка моделей не создана.', error);
        }
    };

    const generateSliceTemplate = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('slice', `${sliceName}.ts`),
                reduxSliceTemplate(sliceName),
            );
        } catch (error) {
            console.log('Ошибка при создании слайса.', error);
        }
    };

    const generateSchemaTemplate = async () => {
        try {
            await fs.writeFile(
                resolveModelPath('types', `${sliceName}Schema.ts`),
                schemaTypeTemplate(sliceName),
            );
        } catch (error) {
            console.log('Ошибка при создании схемы.', error);
        }
    };

    await generateDirTemplate();
    await generateSliceTemplate();
    await generateSchemaTemplate();
};
