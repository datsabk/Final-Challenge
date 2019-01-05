const genFunctions = require('../generator/mygenerator');
const generator = require('../generator/generator');
var assert = require('assert');

describe('Partial Sequence sum test', function () {
let mygen = new genFunctions();
let gen = new generator(mygen.partialSumSeq,[1, 3, 7, 2, 0]);
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
 it('should return 4', function () {
        assert.equal(gen.next(), 4);
    });
    it('should return 11', function () {
        assert.equal(gen.next(), 11);
    });
    it('should return 13', function () {
        assert.equal(gen.next(), 13);
    });
    it('should return 13', function () {
        assert.equal(gen.next(), 13);
    });
});