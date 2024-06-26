const fs = require('fs/promises');

const resolveRoot = require('../lib/resolveRoot');
const apiTemplate = require('../templates/api/apiTemplate');

module.exports = async (layer, sliceName) => {
    const resolveApiPaths = (...segments) => resolveRoot('src', layer, sliceName, 'api', ...segments);

    const generateApiFolder = async () => {
        try {
            await fs.mkdir(resolveApiPaths());
        } catch (error) {
            console.log('Папка API не создана.', error);
        }
    };

    const generateInjectedApi = async () => {
        try {
            await fs.writeFile(
                resolveApiPaths('api.ts'),
                apiTemplate(sliceName),
            );
        } catch (error) {
            console.log('Файл api.ts не был создан.', error);
        }
    };

    await generateApiFolder();
    await generateInjectedApi();
};
