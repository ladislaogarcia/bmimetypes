import MagicNumbers from './MagicNumbers';
import MIME_TYPES, {
    MIME_TYPES_ERROR_MESSAGES,
    DEFAULT_MIME_TYPE
} from './MimeTypesData';

class MimeTypes {

    static #isValidString(fileName) {
        return fileName
            && typeof fileName === 'string'
            && fileName.split(' ').join('') !== '';
    }

    static getMimeTypeFromExtension(fileExtension) {
        const mimeObject = Array.from(MIME_TYPES).filter(obj => {
            return obj.extensions.includes(fileExtension);
        });
        return mimeObject.length ? mimeObject[0].mimetype : DEFAULT_MIME_TYPE;
    }

    static getExtensionFromFileName(fileName) {
        const filenameParts = fileName.split('.');
        return `.${filenameParts[filenameParts.length-1]}`;
    }

    static getMimeTypeFromFileName(filename) {
        return MimeTypes.getContentType(filename);
    }

    static getContentType(filename) {
        if (!MimeTypes.#isValidString(filename))
            throw new Error(MIME_TYPES_ERROR_MESSAGES.FILE_NOT_EXISTS);
        const fileExtByFileName = MimeTypes
            .getExtensionFromFileName(filename);
        let magicNumbersByExtension = null;
        let magicNumbersByFile = null;
        try {
            magicNumbersByExtension = MagicNumbers
                .getMagicNumbersByFileExtension(
                    fileExtByFileName
                );
            magicNumbersByFile = MagicNumbers.getMagicNumbersByFile(filename);
        } catch(err) {
            return err;
        }
        const fileExtsByMagics = magicNumbersByFile
            ? MagicNumbers.getFileExtensionsByMagicNumbers(magicNumbersByFile)
            : fileExtByFileName;
        if(!magicNumbersByFile)
            magicNumbersByFile = magicNumbersByExtension;
        const hasSameMagicNums = magicNumbersByExtension === magicNumbersByFile;
        if( !fileExtsByMagics.length ) return DEFAULT_MIME_TYPE;
        const isValidExtension = fileExtsByMagics.includes(fileExtByFileName);
        // FILE AND FILENAME DO NOT HAVE THE SAME MAGIC NUMBERS
        // AND/OR FILE EXTENSION ( BREACH TRY? )
        if( !hasSameMagicNums || !isValidExtension )
            throw new Error(MIME_TYPES_ERROR_MESSAGES.DIFFERENT_MAGIC_NUMBERS);
        return MimeTypes.getMimeTypeFromExtension(fileExtByFileName);
    }

}

export default MimeTypes;