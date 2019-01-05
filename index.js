const genFunctions = require('./generator/mygenerator');
const generator = require('./generator/generator');

var express=require('express');
var app=express();
app.use('/public',express.static('public'));


var server=app.listen(3000,function() {
    console.log('Listening to port 3000');
    let mygen = new genFunctions();
    let gen = new generator(mygen.rangeSeq);
});
