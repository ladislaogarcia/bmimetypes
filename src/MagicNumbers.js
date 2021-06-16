import { readFileSync } from 'fs';
import
MAGIC_NUMBERS,
{ MAGIC_NUMBERS_ERROR_MESSAGES }
    from './MagicNumbersData';
class MagicNumbers {

    static getFileExtension(fileName) {
        const fileNameParts = fileName.split('.');
        return `.${fileNameParts[fileNameParts.length - 1]}`;
    }

    static isValidString(str) {
        return str && typeof str === 'string' && str.split(' ').join('') !== '';
    }

    static getFileExtensionsByMagicNumbers(magicNumbers) {
        return MAGIC_NUMBERS
            .filter(magicNumber => magicNumber.numbers === magicNumbers)
            .map(magicObj => magicObj.extension);
    }

    static getMagicNumbersByFileExtension(fileExtension) {
        if (!MagicNumbers.isValidString(fileExtension))
            throw new Error(
                `${MAGIC_NUMBERS_ERROR_MESSAGES.FILE_EXTENSION_NOT_ALLOWED}`
            );
        const magicNumbersObj = MAGIC_NUMBERS.filter(magicNumber => {
            return magicNumber.extension === fileExtension;
        });
        return magicNumbersObj.length ? magicNumbersObj[0].numbers : false;
    }

    static getMagicNumbersByFile(fileName) {
        if (!MagicNumbers.isValidString(fileName))
            throw new Error(`${MAGIC_NUMBERS_ERROR_MESSAGES.FILE_NOT_VALID}`);

        const fileExtension = MagicNumbers.getFileExtension(fileName);
        const magicNumbersObj = MAGIC_NUMBERS.filter(magicNumber => {
            return magicNumber.extension === fileExtension;
        });
        const magicNumbersLength = magicNumbersObj.length
            ? magicNumbersObj[0].numbers.replace(/\s/g, '').length
            : 0;

        const fileHex = readFileSync(fileName).toString('hex');
        const magicNumbers = fileHex.slice(0, magicNumbersLength);
        const magicNumbersHexString = magicNumbers ?
            magicNumbers.match(/../g).join(' ') :
            false;

        return magicNumbersHexString;
    }

}

export default MagicNumbers;
export { MAGIC_NUMBERS_ERROR_MESSAGES };