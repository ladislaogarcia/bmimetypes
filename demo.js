import MimeTypes from './src/MimeTypes';
import {readdirSync} from 'fs';

const demoFolder = './demo';
const fileNames = readdirSync(demoFolder);
fileNames.forEach( fileName => {
    const filePath = `${demoFolder}/${fileName}`;
    const contentType = MimeTypes.getContentType(filePath);
    console.log(`${fileName} has a Content-Type of ${contentType}`);
});
