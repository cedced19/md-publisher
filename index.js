#!/usr/bin/env node
'use strict';
var minify = require('html-minifier').minify,
marked = require('marked');

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: true,
  sanitize: true,
  smartLists: true,
  smartypants: true
});
    
var template = function (options, cb) {
    var head1 = '<html lang="fr"><head><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>',
        head2 = '</title><link rel="stylesheet" href="',
        body1 = '"></head><body><div class="container">',
        body2 = '</div></body></html>';
    
    if (typeof options.bootstrap == 'undefined') {
        cb(head1 + options.title + head2 + 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css' + body1 + marked(options.content) + body2); 
    } else {
        cb(head1 + options.title + head2 + options.bootstrap + body1 + marked(options.content) + body2);
    }
}

module.exports = function (options, cb) {
    template(options, function (page) {
        cb(minify(page, {removeComments: true, collapseWhitespace: true}));
    });
};