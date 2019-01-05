const genFunctions = require('../generator/mygenerator');
const generator = require('../generator/generator');
var assert = require('assert');

describe('Prime series test', function () {
let mygen = new genFunctions();
let gen = new generator(mygen.primeSeq);
 it('should return 2', function () {
        assert.equal(gen.next(), 2);
    });
 it('should return 3', function () {
        assert.equal(gen.next(), 3);
    });
    it('should return 5', function () {
        assert.equal(gen.next(), 5);
    });
    it('should return 7', function () {
        assert.equal(gen.next(), 7);
    });
    it('should return 11', function () {
        assert.equal(gen.next(),11);
    });
    it('should return 13', function () {
        assert.equal(gen.next(), 13);
    });
    it('should return 17', function () {
        assert.equal(gen.next(), 17);
    });
    it('should return 29', function () {
        gen.next();//19
        gen.next();//23
        assert.equal(gen.next(), 29);
    });
});