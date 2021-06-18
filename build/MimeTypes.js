"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MagicNumbers = _interopRequireDefault(require("./MagicNumbers"));

var _MimeTypesData = _interopRequireWildcard(require("./MimeTypesData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classStaticPrivateMethodGet(receiver, classConstructor, method) { _classCheckPrivateStaticAccess(receiver, classConstructor); return method; }

function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }

class MimeTypes {
  static getMimeTypeFromExtension(fileExtension) {
    const mimeObject = Array.from(_MimeTypesData.default).filter(obj => {
      return obj.extensions.includes(fileExtension);
    });
    return mimeObject.length ? mimeObject[0].mimetype : _MimeTypesData.DEFAULT_MIME_TYPE;
  }

  static getExtensionFromFileName(fileName) {
    const filenameParts = fileName.split('.');
    return `.${filenameParts[filenameParts.length - 1]}`;
  }

  static getMimeTypeFromFileName(filename) {
    return MimeTypes.getContentType(filename);
  }

  static getContentType(filename) {
    if (!_classStaticPrivateMethodGet(MimeTypes, MimeTypes, _isValidString).call(MimeTypes, filename)) throw new Error(_MimeTypesData.MIME_TYPES_ERROR_MESSAGES.FILE_NOT_EXISTS);
    const extByFileName = MimeTypes.getExtensionFromFileName(filename);
    let magicNumbersByExtension = null;
    let magicNumbersByFile = null;

    try {
      magicNumbersByExtension = _MagicNumbers.default.getMagicNumbersByFileExtension(extByFileName);
      magicNumbersByFile = _MagicNumbers.default.getMagicNumbersByFile(filename);
    } catch (err) {
      return err;
    }

    const fileExtsByMagics = magicNumbersByFile ? _MagicNumbers.default.getFileExtensionsByMagicNumbers(magicNumbersByFile) : extByFileName;
    if (!magicNumbersByFile) magicNumbersByFile = magicNumbersByExtension;
    const hasSameMagicNums = magicNumbersByExtension === magicNumbersByFile;

    if (!fileExtsByMagics.length) {
      const mimeByExt = MimeTypes.getMimeTypeFromExtension(extByFileName);
      return mimeByExt || _MimeTypesData.DEFAULT_MIME_TYPE;
    }

    const isValidExtension = fileExtsByMagics.includes(extByFileName); // FILE AND FILENAME DO NOT HAVE THE SAME MAGIC NUMBERS
    // AND/OR FILE EXTENSION ( BREACH TRY? )

    if (!hasSameMagicNums || !isValidExtension) throw new Error(_MimeTypesData.MIME_TYPES_ERROR_MESSAGES.DIFFERENT_MAGIC_NUMBERS);
    return MimeTypes.getMimeTypeFromExtension(extByFileName);
  }

}

function _isValidString(fileName) {
  return fileName && typeof fileName === 'string' && fileName.split(' ').join('') !== '';
}

var _default = MimeTypes;
exports.default = _default;