'use strict';
var mdPublisher = require('./');
describe('mdPublisher', function () {
  it('should convert', function () {
    mdPublisher({content: '# Hello', title: 'Example'}, function(content){
        console.log(content);
    });
  });
});