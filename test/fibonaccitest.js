const genFunctions = require('../generator/mygenerator');
const generator = require('../generator/generator');
var assert = require('assert');

describe('Fibonacci series test', function () {
let mygen = new genFunctions();
let gen = new generator(mygen.fibonacciSeq);
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
    it('should return 2', function () {
        assert.equal(gen.next(), 2);
    });
    it('should return 3', function () {
        assert.equal(gen.next(), 3);
    });
    it('should return 5', function () {
        assert.equal(gen.next(), 5);
    });
    it('should return 8', function () {
        assert.equal(gen.next(), 8);
    });
    it('should return 13', function () {
        assert.equal(gen.next(), 13);
    });
    it('should return 55', function () {
        gen.next();//21
        gen.next();//34
        assert.equal(gen.next(), 55);
    });
});