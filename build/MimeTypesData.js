"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_MIME_TYPE = exports.MIME_TYPES_ERROR_MESSAGES = exports.default = void 0;
const MIME_TYPES = [{
  'extensions': ['.aac'],
  'mimetype': 'audio/aac',
  'description': 'Archivo de audio AAC'
}, {
  'extensions': ['.abw'],
  'mimetype': 'application/x-abiword',
  'description': 'Documento AbiWord'
}, {
  'extensions': ['.arc'],
  'mimetype': 'application/octet-stream',
  'description': 'Documento de Archivo (múltiples archivos incrustados)'
}, {
  'extensions': ['.avi'],
  'mimetype': 'video/x-msvideo',
  'description': 'AVI: Audio Video Intercalado'
}, {
  'extensions': ['.azw'],
  'mimetype': 'application/vnd.amazon.ebook',
  'description': 'Formato  eBook Amazon Kindle '
}, {
  'extensions': ['.bin'],
  'mimetype': 'application/octet-stream',
  'description': 'Cualquier tipo de datos binarios'
}, {
  'extensions': ['.bz'],
  'mimetype': 'application/x-bzip',
  'description': 'Archivo BZip'
}, {
  'extensions': ['.bz2'],
  'mimetype': 'application/x-bzip2',
  'description': 'Archivo BZip2'
}, {
  'extensions': ['.csh'],
  'mimetype': 'application/x-csh',
  'description': 'Script C-Shell'
}, {
  'extensions': ['.css'],
  'mimetype': 'text/css',
  'description': 'Hojas de estilo (CSS)'
}, {
  'extensions': ['.csv'],
  'mimetype': 'text/csv',
  'description': 'Valores separados por coma (CSV)'
}, {
  'extensions': ['.doc'],
  'mimetype': 'application/msword',
  'description': 'Microsoft Word'
}, {
  'extensions': ['.epub'],
  'mimetype': 'application/epub+zip',
  'description': 'Publicación Electrónica (EPUB)'
}, {
  'extensions': ['.gif'],
  'mimetype': 'image/gif',
  'description': 'Graphics Interchange Format (GIF)'
}, {
  'extensions': ['.htm', '.html'],
  'mimetype': 'text/html',
  'description': 'Hipertexto (HTML)'
}, {
  'extensions': ['.ico'],
  'mimetype': 'image/x-icon',
  'description': 'Formato Icon'
}, {
  'extensions': ['.ics'],
  'mimetype': 'text/calendar',
  'description': 'Formato iCalendar'
}, {
  'extensions': ['.jar'],
  'mimetype': 'application/java-archive',
  'description': 'Archivo Java (JAR)'
}, {
  'extensions': ['.jpeg', '.jpg'],
  'mimetype': 'image/jpeg',
  'description': 'Imágenes JPEG'
}, {
  'extensions': ['.js'],
  'mimetype': 'application/javascript',
  'description': 'JavaScript (ECMAScript)'
}, {
  'extensions': ['.json'],
  'mimetype': 'application/json',
  'description': 'Formato JSON'
}, {
  'extensions': ['.mid', '.midi'],
  'mimetype': 'audio/midi',
  'description': 'Interfaz Digital de Instrumentos Musicales (MIDI)'
}, {
  'extensions': ['.mpeg'],
  'mimetype': 'video/mpeg',
  'description': 'Video MPEG'
}, {
  'extensions': ['.mpkg'],
  'mimetype': 'application/vnd.apple.installer+xml',
  'description': 'Paquete de instalación de Apple'
}, {
  'extensions': ['.odp'],
  'mimetype': 'application/vnd.oasis.opendocument.presentation',
  'description': 'Documento de presentación de OpenDocument'
}, {
  'extensions': ['.ods'],
  'mimetype': 'application/vnd.oasis.opendocument.spreadsheet',
  'description': 'Hoja de Cálculo OpenDocument'
}, {
  'extensions': ['.odt'],
  'mimetype': 'application/vnd.oasis.opendocument.text',
  'description': 'Documento de texto OpenDocument'
}, {
  'extensions': ['.oga'],
  'mimetype': 'audio/ogg',
  'description': 'Audio OGG'
}, {
  'extensions': ['.ogv'],
  'mimetype': 'video/ogg',
  'description': 'Video OGG'
}, {
  'extensions': ['.ogx'],
  'mimetype': 'application/ogg',
  'description': 'OGG'
}, {
  'extensions': ['.pdf', '.ai'],
  'mimetype': 'application/pdf',
  'description': 'Adobe Portable Document Format (PDF)'
}, {
  'extensions': ['.ppt'],
  'mimetype': 'application/vnd.ms-powerpoint',
  'description': 'Microsoft PowerPoint'
}, {
  'extensions': ['.rar'],
  'mimetype': 'application/x-rar-compressed',
  'description': 'Archivo RAR'
}, {
  'extensions': ['.rtf'],
  'mimetype': 'application/rtf',
  'description': 'Formato de Texto Enriquecido (RTF)'
}, {
  'extensions': ['.sh'],
  'mimetype': 'application/x-sh',
  'description': 'Script Bourne shell'
}, {
  'extensions': ['.svg'],
  'mimetype': 'image/svg+xml',
  'description': 'Gráficos Vectoriales (SVG)'
}, {
  'extensions': ['.swf'],
  'mimetype': 'application/x-shockwave-flash',
  'description': 'Small web format (SWF) o Documento Adobe Flash'
}, {
  'extensions': ['.tar'],
  'mimetype': 'application/x-tar',
  'description': 'Aerchivo Tape (TAR)'
}, {
  'extensions': ['.tif', '.tiff'],
  'mimetype': 'image/tiff',
  'description': 'Formato de archivo de imagen etiquetado (TIFF)'
}, {
  'extensions': ['.ttf'],
  'mimetype': 'font/ttf',
  'description': 'Fuente TrueType'
}, {
  'extensions': ['.vsd'],
  'mimetype': 'application/vnd.visio',
  'description': 'Microsft Visio'
}, {
  'extensions': ['.wav'],
  'mimetype': 'audio/x-wav',
  'description': 'Formato de audio de forma de onda (WAV)'
}, {
  'extensions': ['.weba'],
  'mimetype': 'audio/webm',
  'description': 'Audio WEBM'
}, {
  'extensions': ['.webm'],
  'mimetype': 'video/webm',
  'description': 'Video WEBM'
}, {
  'extensions': ['.webp'],
  'mimetype': 'image/webp',
  'description': 'Imágenes WEBP'
}, {
  'extensions': ['.woff'],
  'mimetype': 'font/woff',
  'description': 'Formato de fuente abierta web (WOFF)'
}, {
  'extensions': ['.woff2'],
  'mimetype': 'font/woff2',
  'description': 'Formato de fuente abierta web (WOFF)'
}, {
  'extensions': ['.xhtml'],
  'mimetype': 'application/xhtml+xml',
  'description': 'XHTML'
}, {
  'extensions': ['.xls'],
  'mimetype': 'application/vnd.ms-excel',
  'description': 'Microsoft Excel'
}, {
  'extensions': ['.xml'],
  'mimetype': 'application/xml',
  'description': 'XML'
}, {
  'extensions': ['.xul'],
  'mimetype': 'application/vnd.mozilla.xul+xml',
  'description': 'XUL'
}, {
  'extensions': ['.zip'],
  'mimetype': 'application/zip',
  'description': 'Archivo ZIP'
}, {
  'extensions': ['.3gp'],
  'mimetype': 'video/3gpp\\n    audio/3gpp if it doesn\'t contain video',
  'description': 'Contenedor de audio/video 3GPP'
}, {
  'extensions': ['.3g2'],
  'mimetype': 'video/3gpp2\\n audio/3gpp2 if it doesn\'t contain video',
  'description': 'Contenedor de audio/video 3GPP2'
}, {
  'extensions': ['.7z'],
  'mimetype': 'application/x-7z-compressed',
  'description': 'Archivo 7-zip'
}];
const DEFAULT_MIME_TYPE = 'application/octet-stream';
exports.DEFAULT_MIME_TYPE = DEFAULT_MIME_TYPE;
const MIME_TYPES_ERROR_MESSAGES = {
  FILE_NAME_NOT_VALID: 'MimeTypes: The name of the file is not valid.',
  FILE_NOT_EXISTS: 'MimeTypes: File does not exists',
  UNKNOWN_CONTENT_TYPE: 'MimeTypes: Unknown content type',
  DIFFERENT_MAGIC_NUMBERS: 'MimeTypes: Different Magic Numbers'
};
exports.MIME_TYPES_ERROR_MESSAGES = MIME_TYPES_ERROR_MESSAGES;
var _default = MIME_TYPES;
exports.default = _default;