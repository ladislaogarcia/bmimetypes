/* eslint-disable no-undef */
import {readdirSync} from 'fs';

const env = process.argv[2];
const folder = env === '--dev'  ? 'src' : 'build';
import(`./${folder}/MimeTypes`)
    .then( MimeTypesObj => {
        const MimeTypes = MimeTypesObj.default;
        const demoFolder = './demo';
        const fileNames = readdirSync(demoFolder);
        fileNames.forEach( fileName => {
            if(!fileName.toLocaleLowerCase().startsWith('demo')) return;
            const filePath = `${demoFolder}/${fileName}`;
            const contentType = MimeTypes.getContentType(filePath);
            console.log(`${fileName} has a Content-Type of ${contentType}`);
        });
    });


