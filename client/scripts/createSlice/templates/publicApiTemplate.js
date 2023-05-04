module.exports = (
    componentName,
    schemaName,
    args,
) => `export { ${componentName} } from './ui/${componentName}/${componentName}';
${args.model ? `export { ${firstCharToUpperCase(schemaName)} } from './model/types/${schemaName};'` : ''}`;
