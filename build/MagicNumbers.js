"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"MAGIC_NUMBERS_ERROR_MESSAGES",{enumerable:!0,get:function(){return _MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES}}),exports.default=void 0;var _fs=require("fs"),_MagicNumbersData=_interopRequireWildcard(require("./MagicNumbersData"));function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var c=_getRequireWildcardCache(b);if(c&&c.has(a))return c.get(a);var d={},e=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if("default"!=f&&Object.prototype.hasOwnProperty.call(a,f)){var g=e?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(d,f,g):d[f]=a[f]}return d.default=a,c&&c.set(a,d),d}class MagicNumbers{static getFileExtension(a){const b=a.split(".");return`.${b[b.length-1]}`}static isValidString(a){return a&&"string"==typeof a&&""!==a.split(" ").join("")}static getFileExtensionsByMagicNumbers(a){return _MagicNumbersData.default.filter(b=>b.numbers===a).map(a=>a.extension)}static getMagicNumbersByFileExtension(a){if(!MagicNumbers.isValidString(a))throw new Error(`${_MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES.FILE_EXTENSION_NOT_ALLOWED}`);const b=_MagicNumbersData.default.filter(b=>b.extension===a);return!!b.length&&b[0].numbers}static getMagicNumbersByFile(a){if(!MagicNumbers.isValidString(a))throw new Error(`${_MagicNumbersData.MAGIC_NUMBERS_ERROR_MESSAGES.FILE_NOT_VALID}`);const b=MagicNumbers.getFileExtension(a),c=_MagicNumbersData.default.filter(a=>a.extension===b),d=c.length?c[0].numbers.replace(/\s/g,"").length:0,e=(0,_fs.readFileSync)(a).toString("hex"),f=e.slice(0,d),g=!!f&&f.match(/../g).join(" ");return g}}var _default=MagicNumbers;exports.default=_default;