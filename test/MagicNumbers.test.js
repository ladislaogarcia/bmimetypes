/* eslint-disable max-len */
/* eslint-disable no-undef */
import MagicNumbers from '../src/MagicNumbers';
import path from 'path';

const fileExtension = '.pdf';
const fileName = path.join(__dirname, 'res', `test${fileExtension}`);
const magicNumbers = '25 50 44 46';

describe('MagicNumbers class test', () => {

    test('Extract file extension with "getFileExtension" method', () => {
        const mimeTypeFileExtension = MagicNumbers.getFileExtension(fileName);
        expect(mimeTypeFileExtension).toEqual(fileExtension);
    });
    test('Check if something is a string and is not an empty one with "isValidString" method', () => {
        const str = 'This is a string'.replace(/\s/, '');
        const isValidString = MagicNumbers.isValidString(str);
        expect(isValidString).toEqual(true);
    });

    test('Extract file extension over magic numbers with "getFileExtensionsByMagicNumbers" method', () => {
        const fileExtensionByMagicNumbers = MagicNumbers.getFileExtensionsByMagicNumbers(magicNumbers);
        expect(fileExtensionByMagicNumbers.includes(fileExtension)).toBe(true);
    });

    test('Extract file extension with "getFileExtension" method', () => {
        const mimeTypeFileExtension = MagicNumbers.getFileExtension(fileName);
        expect(mimeTypeFileExtension).toEqual(fileExtension);
    });

    test('Extract file extension over magic numbers with "getFileExtensionsByMagicNumbers" method', () => {
        const fileExtensionByMagicNumbers = MagicNumbers.getFileExtensionsByMagicNumbers(magicNumbers);
        expect(fileExtensionByMagicNumbers.includes(fileExtension)).toBe(true);
    });

    test('Get magic numbers by file with "getMagicNumbersByFile" method', () => {
        const fileExtensionByMagicNumbers = MagicNumbers.getMagicNumbersByFile(fileName);
        expect(fileExtensionByMagicNumbers).toEqual(magicNumbers);
    });

});