"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAGIC_NUMBERS_ERROR_MESSAGES = exports.default = void 0;

/* eslint-disable max-len */
const MAGIC_NUMBERS = [{
  'description': 'Adobe Illustrator',
  'extension': '.ai',
  'numbers': '25 50 44 46'
}, {
  'description': 'Bitmap graphic',
  'extension': '.bmp',
  'numbers': '42 4D'
}, {
  'description': 'Class File',
  'extension': '.class',
  'numbers': 'CA FE BA BE'
}, {
  'description': 'JPEG graphic file',
  'extension': '.jpg',
  'numbers': 'FFD8'
}, {
  'description': 'JPEG 2000 graphic file',
  'extension': '.jp2',
  'numbers': '0000000C6A5020200D0A'
}, {
  'description': 'GIF graphic file',
  'extension': '.gif',
  'numbers': '47 49 46 38'
}, {
  'description': 'TIF graphic file',
  'extension': '.tif',
  'numbers': '49 49'
}, {
  'description': 'PNG graphic file',
  'extension': '.png',
  'numbers': '89 50 4E 47 .PNG'
}, {
  'description': 'WAV audio file',
  'extension': '.png',
  'numbers': '52 49 46 46 RIFF'
}, {
  'description': 'ELF Linux EXE',
  'extension': '.png',
  'numbers': '7F 45 4C 46 .ELF'
}, {
  'description': 'Photoshop Graphics',
  'extension': '.psd',
  'numbers': '38 42 50 53'
}, {
  'description': 'Windows Meta File',
  'extension': '.wmf',
  'numbers': 'D7 CD C6 9A'
}, {
  'description': 'MIDI file',
  'extension': '.mid',
  'numbers': '4D 54 68 64'
}, {
  'description': 'Icon file',
  'extension': '.ico',
  'numbers': '00 00 01 00'
}, {
  'description': 'MP3 file with ID3 identity tag',
  'extension': '.mp3',
  'numbers': '49 44 33'
}, {
  'description': 'AVI video file',
  'extension': '.avi',
  'numbers': '52 49 46 46'
}, {
  'description': 'Flash Shockwave',
  'extension': '.swf',
  'numbers': '46 57 53'
}, {
  'description': 'Flash Video',
  'extension': '.flv',
  'numbers': '46 4C 56'
}, {
  'description': 'Mpeg 4 video file',
  'extension': '.mp4',
  'numbers': '00 00 00 18 66 74 79 70 6D 70 34 32'
}, {
  'description': 'MOV video file',
  'extension': '.mov',
  'numbers': '6D 6F 6F 76'
}, {
  'description': 'Windows Video file',
  'extension': '.wmv',
  'numbers': '30 26 B2 75 8E 66 CF'
}, {
  'description': 'Windows Audio file',
  'extension': '.wma',
  'numbers': '30 26 B2 75 8E 66 CF'
}, {
  'description': 'PKZip',
  'extension': '.zip',
  'numbers': '50 4B 03 04'
}, {
  'description': 'GZip',
  'extension': '.gz',
  'numbers': '1F 8B 08'
}, {
  'description': 'Tar file',
  'extension': '.tar',
  'numbers': '75 73 74 61 72'
}, {
  'description': 'Microsoft Installer',
  'extension': '.msi',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'Object Code File',
  'extension': '.obj',
  'numbers': '4C 01'
}, {
  'description': 'Dynamic Library',
  'extension': '.dll',
  'numbers': '4D 5A'
}, {
  'description': 'CAB Installer file',
  'extension': '.cab',
  'numbers': '4D 53 43 46'
}, {
  'description': 'Executable file',
  'extension': '.exe',
  'numbers': '4D 5A'
}, {
  'description': 'RAR file',
  'extension': '.rar',
  'numbers': '52 61 72 21 1A 07 00'
}, {
  'description': 'SYS file',
  'extension': '.sys',
  'numbers': '4D 5A'
}, {
  'description': 'Help file',
  'extension': '.hlp',
  'numbers': '3F 5F 03 00'
}, {
  'description': 'VMWare Disk file',
  'extension': '.vmdk',
  'numbers': '4B 44 4D 56'
}, {
  'description': 'Outlook Post Office file',
  'extension': '.pst',
  'numbers': '21 42 44 4E 42'
}, {
  'description': 'PDF Document',
  'extension': '.pdf',
  'numbers': '25 50 44 46'
}, {
  'description': 'Word Document',
  'extension': '.doc',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'RTF Document',
  'extension': '.rtf',
  'numbers': '7B 5C 72 74 66 31'
}, {
  'description': 'Excel Document',
  'extension': '.xls',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'PowerPoint Document',
  'extension': '.ppt',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'Visio Document',
  'extension': '.vsd',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'DOCX (Office 2010)',
  'extension': '.docx',
  'numbers': '50 4B 03 04'
}, {
  'description': 'XLSX (Office 2010)',
  'extension': '.xlsx',
  'numbers': '50 4B 03 04'
}, {
  'description': 'PPTX (Office 2010)',
  'extension': '.pptx',
  'numbers': '50 4B 03 04'
}, {
  'description': 'Microsoft Database',
  'extension': '.mdb',
  'numbers': '53 74 61 6E 64 61 72 64 20 4A 65 74'
}, {
  'description': 'Postcript File',
  'extension': '.ps',
  'numbers': '25 21'
}, {
  'description': 'Outlook Message File',
  'extension': '.msg',
  'numbers': 'D0 CF 11 E0 A1 B1 1A E1'
}, {
  'description': 'EPS File',
  'extension': '.eps',
  'numbers': '25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 30 20 45 50 53 46 2D 33 20 30'
}, {
  'description': 'Jar File',
  'extension': '.jar',
  'numbers': '50 4B 03 04 14 00 08 00 08 00'
}, {
  'description': 'SLN File',
  'extension': '.sln',
  'numbers': '4D 69 63 72 6F 73 6F 66 74 20 56 69 73 75 61 6C 20 53 74 75 64 69 6F 20 53 6F 6C 75 74 69 6F 6E 20 46 69 6C 65'
}, {
  'description': 'Zlib File',
  'extension': '.zlib',
  'numbers': '78 9C'
}, {
  'description': 'SDF File',
  'extension': '.sdf',
  'numbers': '78 9C'
}];
const MAGIC_NUMBERS_ERROR_MESSAGES = {
  FILE_EXTENSION_NOT_ALLOWED: 'MagicNumbers: File extension is not allowed',
  FILE_NOT_VALID: 'MagicNumbers: File is missing or is not a valid filename'
};
exports.MAGIC_NUMBERS_ERROR_MESSAGES = MAGIC_NUMBERS_ERROR_MESSAGES;
var _default = MAGIC_NUMBERS;
exports.default = _default;