const minimist = require('minimist');

const createTemplate = require('./generators/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const args = minimist(process.argv.slice(2), {
    alias: {
        api: 'api',
        model: 'model',
    },
});

const layers = ['features', 'entites', 'pages'];

if (!layer || !layer.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}.`);
}

if (!sliceName) {
    throw new Error('Укажете название слайса');
}

createTemplate(layer, sliceName, args);
