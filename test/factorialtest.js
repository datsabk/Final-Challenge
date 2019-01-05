const genFunctions = require('../generator/mygenerator');
const generator = require('../generator/generator');
var assert = require('assert');

describe('Factorial series test', function () {
let mygen = new genFunctions();
let gen = new generator(mygen.factorialSeq);
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
    it('should return 2', function () {
        assert.equal(gen.next(), 2);
    });
    it('should return 6', function () {
        assert.equal(gen.next(), 6);
    });
    it('should return 24', function () {
        assert.equal(gen.next(), 24);
    });
    it('should return 120', function () {
        assert.equal(gen.next(), 120);
    });
    it('should return 720', function () {
        assert.equal(gen.next(), 720);
    });
    it('should return 362880', function () {
        gen.next();//5040
        gen.next();//40320
        assert.equal(gen.next(), 362880);
    });
});