const fs = require('fs/promises');

const firstCharToUpperCase = require('../lib/firstCharToUpperCase');
const resolveRoot = require('../lib/resolveRoot');
const createPublicApi = require('../templates/publicApiTemplate');

module.exports = async (layer, sliceName, args) => {
    const componentName = firstCharToUpperCase(sliceName);
    const schemaName = `${sliceName}Schema`;

    try {
        await fs.writeFile(
            resolveRoot('src', layer, sliceName, 'index.ts'),
            createPublicApi(componentName, schemaName, args),
        );
    } catch (error) {
        console.log('Не удалось создать Public Api.', error);
    }
};
