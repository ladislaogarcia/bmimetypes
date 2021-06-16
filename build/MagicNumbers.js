"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MAGIC_NUMBERS_ERROR_MESSAGES", {
  enumerable: true,
  get: function () {
    return _MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES;
  }
});
exports.default = void 0;

var _fs = require("fs");

var _MagicNumbersData = _interopRequireWildcard(require("./MagicNumbersData"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class MagicNumbers {
  static getFileExtension(fileName) {
    const fileNameParts = fileName.split('.');
    return `.${fileNameParts[fileNameParts.length - 1]}`;
  }

  static isValidString(str) {
    return str && typeof str === 'string' && str.split(' ').join('') !== '';
  }

  static getFileExtensionsByMagicNumbers(magicNumbers) {
    return _MagicNumbersData.default.filter(magicNumber => magicNumber.numbers === magicNumbers).map(magicObj => magicObj.extension);
  }

  static getMagicNumbersByFileExtension(fileExtension) {
    if (!MagicNumbers.isValidString(fileExtension)) throw new Error(`${_MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES.FILE_EXTENSION_NOT_ALLOWED}`);

    const magicNumbersObj = _MagicNumbersData.default.filter(magicNumber => {
      return magicNumber.extension === fileExtension;
    });

    return magicNumbersObj.length ? magicNumbersObj[0].numbers : false;
  }

  static getMagicNumbersByFile(fileName) {
    if (!MagicNumbers.isValidString(fileName)) throw new Error(`${_MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES.FILE_NOT_VALID}`);
    const fileExtension = MagicNumbers.getFileExtension(fileName);

    const magicNumbersObj = _MagicNumbersData.default.filter(magicNumber => {
      return magicNumber.extension === fileExtension;
    });

    const magicNumbersLength = magicNumbersObj.length ? magicNumbersObj[0].numbers.replace(/\s/g, '').length : 0;
    const fileHex = (0, _fs.readFileSync)(fileName).toString('hex');
    const magicNumbers = fileHex.slice(0, magicNumbersLength);
    const magicNumbersHexString = magicNumbers ? magicNumbers.match(/../g).join(' ') : false;
    return magicNumbersHexString;
  }

}

var _default = MagicNumbers;
exports.default = _default;