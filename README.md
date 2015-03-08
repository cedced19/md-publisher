# md-publisher

Convert Markdown to a lite HTML page with Bootstrap.

[![Build Status](https://travis-ci.org/cedced19/md-publisher.svg?branch=master)](https://travis-ci.org/cedced19/md-publisher)
[![NPM version](https://badge.fury.io/js/md-publisher.svg)](http://badge.fury.io/js/md-publisher)

```bash
npm install --save md-publisher
```

## Example

```js
var mdPublisher = require('md-publisher');

mdPublisher({content: '# Hello', title: 'Example'}, function(content){
    console.log(content);
});
```

### Options

#### content

*Required*  
Type: `string`

#### title

*Required*  
Type: `string`

#### bootstrap

Type: `string`  

Define path of bootstrap.

## CLI

```bash
$ npm install -g md-publisher-cli
$ md-publisher -f 
```

### Options

```
-h, --help                  output usage information

-V, --version               output the version number

-f  --file [string]         specified the file without extention
```