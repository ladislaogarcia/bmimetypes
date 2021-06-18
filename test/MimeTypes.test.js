/* eslint-disable max-len */
/* eslint-disable no-undef */
import MimeTypes from '../src/MimeTypes';
import path from 'path';

const fileExtension = '.pdf';
const mimeType = 'application/pdf';
const fileName = path.join(__dirname, 'res', `test${fileExtension}`);

describe('MimeTypes class test', () => {

    test('Extract mime-type over file extension with "getMimeTypeFromExtension" method', () => {
        const mimeTypeByFileExtension = MimeTypes.getMimeTypeFromExtension(fileExtension);
        expect(mimeTypeByFileExtension).toEqual(mimeType);
    });
    test('Extract file extension over a filename given with "getExtensionFromFileName" method', () => {
        const fleExtensionByFileName = MimeTypes.getExtensionFromFileName(fileName);
        expect(fleExtensionByFileName).toEqual(fileExtension);
    });

    test('Extract mime-type over file with "getMimeTypeFromFileName" method', () => {
        const mimeTypeByFileExtension = MimeTypes.getMimeTypeFromFileName(fileName);
        expect(mimeTypeByFileExtension).toEqual(mimeType);
    });

    test('Extract mime-type over file with "getContentType" method', () => {
        const mimeTypeByFileExtension = MimeTypes.getContentType(fileName);
        expect(mimeTypeByFileExtension).toEqual(mimeType);
    });

});