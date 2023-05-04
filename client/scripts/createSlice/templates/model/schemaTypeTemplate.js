const firstCharToUpperCase = require('../../lib/firstCharToUpperCase');

module.exports = (sliceName) => `export interface ${firstCharToUpperCase(sliceName)}Schema {
    
}`;
