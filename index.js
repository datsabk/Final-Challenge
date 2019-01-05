const genFunctions = require('./generator/mygenerator');
const generator = require('./generator/generator');


let mygen = new genFunctions();
let gen = new generator(mygen.factorialSeq);

var express=require('express');
var app=express();
app.use('/public',express.static('public'));


var server=app.listen(3000,function() {});
