# bmimetypes
Simple class to get the content-type from a given file. Over its magic numbers and its extension.

<br>

## SUPPORTED FILES & EXTENSIONS
.aac, .abw, .arc, .avi, .azw, .bin, .bz, .bz2, .csh, .css, .csv, .doc, .epub, .gif, .txt, .htm, .html, .ico, .ics, .jar, .jpeg, .jpg, .js, .json, .mid, .midi, .mpeg, .mpkg, .odp, .ods, .odt, .oga, .ogv, .ogx, .pdf, .ai, .ppt, .rar, .rtf, .sh, .svg, .swf, .tar, .tif, .tiff, .ttf, .vsd, .wav, .weba, .webm, .webp, .woff, .woff2, .xhtml, .xls, .xml, .xul, .zip, .3gp, .3g2, .7z

***( This list will continue growing up )***

<br>

---
## Requirements

For use it, you will only need Node.js and its global package manager, **npm** ( included in NodeJS ), installed in your environement.

This package is *currently* developed over these following packages versions.

Requirement |   Version
:---        |      ---:
NodeJS      |   14.17.0
npm         |   6.14.13

<br/>

### **NodeJS**
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command. There might be some difference with the version shown by your terminal.
But,it is recommended to install, at least, these ones.

    node --version
    v14.17.0

    npm --version
    6.14.13

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g
<br/>

# How to use

## Installing

    npm install --save bmimetypes

## Requiring
Just import in your file as you would do with any other package.

```javascript
import MimeTypes from 'bmimetypes'
```

## Using
Use the statics methods as usual.

```javascript
import MimeTypes from 'bmimetypes'

const fileName = './readme.txt';

const cType = MimeTypes.getContentType(filename);

console.log(`Content type of ${fileName} is ${cType}`);
```
<br/>

# How it works

**bmimetypes** is a node package with a few methods you can use. Developed over two javascript classes called **MimeTypes** and **MagicNumbers** that has all its members 'static'. Both of them.

<br/>

### ***MimeTypes** class*
This class is the package main class. It will give us what we need. The 'Content-Type' of a file. It needs:

1. File over you want to get the 'Content-Type' has to exists.
2. File has to has the right extension correspondig to its content.

There is an exception. If you want to get the 'Content-Type' of a file extension, but we haven´t got any file of that type ( maybe if you are working with **Blob** and not with files ), you can use the method **getMimeTypeFromExtension** that returns the 'Content-Type' of a type of files only passing it the extension we want to know. See section "***methods***" below for more information.

<br/>

It makes in this way:

1. Get the 'Content-Type' over its Magic Numbers. If the file has got them.
2. Get the 'Content-Type' over its extension.
3. If there are some kind of issue, this class will throw an error:
    - If the Magic Numbers obtained in steps 1 and 2 above do not match.
    - If the file has an extension that do not correspond to its Magic Numbers.

4. It will returns the 'Content-Type' for the file you have requested or the mime-type by default:

        application/octet-stream

<br/>

This is made over the main method of this class called **getContentType**.

<br/>

## ***MimeTypes** class* - **Methods** *(all statics)*
<br/>

| method name |  params  | returns |
| ---  | --- | --- |
| **getContentType(** *fileName* **)** <sup>1</sup>   | **fileName**: *Name of the file you want to get the 'Content-Type'*.  | File Content-Type ( *default*: **'application/octet-stream'**)  |
| **getMimeTypeFromExtension** *fileExtension* **)**  | **fileExtension**: *File extension which you want to get the 'Content-Type'*.  |  |
| **getMimeTypeFromFileName(** *filename* **)** <sup>2</sup> | **fileName**: *Name of the file you want to get the 'Content-Type'*.  |    |

<hr>
<sup>1</sup>&nbsp;&nbsp;File must exists. It will throw an error if it foesn´t exists.
<br/>
<sup>2</sup>&nbsp;&nbsp;An alias for **getContentType** method
<br/>
<hr>
<br/>

There is another class that is exposed to make this package more useful. It is called **MagicNumbers** class. It can get the magic numbers from a given file, if it is possible.

<br/>

<hr/>
<br/>

## ***MagicNumbers** class* - **Methods** *(all statics)*
<br/>

| method name |  params  | returns |
| ---  | --- | --- |
| **getMagicNumbersByFile(** *fileName* **)**    | **fileName**: *Name of the file you want to get the 'Magic Numbers'*.  |  |
| **getMagicNumbersByFileExtension(** *fileExtension* **)**    | **fileExtension**: *File extension which you want to get the 'Magic Numbers'*  |   |
| **getFileExtensionByMagicNumbers(** *magicNumbers* **)**    | **magicNumbers**: *'Magic Numbers'* which you want to get the extension  |  | 

<br/>
<br/>

## Extending
As every Javascript class, it can be extended. So, makes it your own use and collabote.

<br/>

```javascript
import MimeTypes from 'bmimetypes'

class MyMimeTypes extends MimeTypes {
    ...
}
```
<br/>

I hope you like this package. Leave comments, issues,...
<br/>

## ...and many thanks !!! ##