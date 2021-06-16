/* eslint-disable max-len */
/* eslint-disable no-undef */
import MimeTypes from '../src/MimeTypes';
import path from 'path';

const fileName = path.join(__dirname, 'MimeTypes.test.js');
describe('MimeTypes class test', () => {

    test('Extract mime-type over file extension with "getMimeTypeFromExtension" method', () => {
        const fileExtension = '.js';
        const expected = 'application/javascript';
        const mimeTypeByFileExtension = MimeTypes.getMimeTypeFromExtension(fileExtension);
        expect(mimeTypeByFileExtension).toEqual(expected);
    });
    test('Extract file extension over a filename given with "getExtensionFromFileName" method', () => {
        const expected = '.js';
        const fleExtensionByFileName = MimeTypes.getExtensionFromFileName(fileName);
        expect(fleExtensionByFileName).toEqual(expected);
    });

    test('Extract mime-type over file with "getMimeTypeFromFileName" method', () => {
        const expected = 'application/javascript';
        const mimeTypeByFileExtension = MimeTypes.getMimeTypeFromFileName(fileName);
        expect(mimeTypeByFileExtension).toEqual(expected);
    });

    test('Extract mime-type over file with "getContentType" method', () => {
        const expected = 'application/javascript';
        const mimeTypeByFileExtension = MimeTypes.getContentType(fileName);
        expect(mimeTypeByFileExtension).toEqual(expected);
    });

});