import MimeTypes from './src/MimeTypes';
const filename = './demo.ai';
const mimetype = MimeTypes.getMimeTypeFromFileName(filename);
console.log(`The file "${filename}" has a mime-type of "${mimetype}"`);

console.log(`Content-type: ${MimeTypes.getContentType(filename)}`);
