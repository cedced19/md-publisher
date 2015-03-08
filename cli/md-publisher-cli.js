#!/usr/bin/env node
'use strict';

var program = require('commander'),
    colors = require('colors'),
    pkg = require('./package.json'),
    fs = require('fs'),
    mdPublisher = require('md-publisher');

program
    .version(pkg.version)
    .option('-f, --file [string]', 'specified the file without extention')
    .parse(process.argv);

var filename = process.cwd() + '/' + program.file + '.md';

if (typeof program.file == 'undefined') {
    console.log('Please set a file.'.red);
    process.exit(1);
}

if (!fs.existsSync(filename)) {
    console.log(colors.red('Error! File: ' + program.file + '.md does not existing.'));
    process.exit(1);
}

fs.readFile(filename, {encoding: 'utf8'}, function (err, data) {
  mdPublisher({content: data, title: program.file}, function(content){
    fs.writeFile(process.cwd() + '/' + program.file + '.html', content, function (err) {
      if (err) {
        console.log('There was an error.'.red);
        process.exit(1);
      }
      console.log('Done!'.green);
    });
  });
});