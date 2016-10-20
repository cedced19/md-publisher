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
    .option('-c, --check', 'check if there are an update')
    .parse(process.argv);

if (typeof program.file == 'undefined') {
    console.log('Please set a file with -f. \nThe README.md will be converted.'.red);
    program.file = 'README';
}

if (program.check) {
    require('check-update')({packageName: pkg.name, packageVersion: pkg.version, isCLI: true}, function(err, latestVersion, defaultMessage){
        if(!err){
            console.log(defaultMessage);
        }
    });
}

var filename = process.cwd() + '/' + program.file + '.md';

if (!fs.existsSync(filename)) {
    console.log(colors.red('Error! File: ' + program.file + '.md does not existing. \nMaybe, you set the filename with the extention.'));
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
