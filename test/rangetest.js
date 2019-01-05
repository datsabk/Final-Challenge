const genFunctions = require('../generator/mygenerator');
const generator = require('../generator/generator');
var assert = require('assert');

describe('Range test', function () {
let mygen = new genFunctions();
let gen = new generator(mygen.rangeSeq,1,3);
 it('should return 1', function () {
        assert.equal(gen.next(), 1);
    });
 it('should return 4', function () {
        assert.equal(gen.next(), 4);
    });
    it('should return 7', function () {
        assert.equal(gen.next(), 7);
    });
    it('should return 10', function () {
        assert.equal(gen.next(), 10);
    });
});
describe('Range test after reset', function () {
    it('should return 1', function () {
        mygen = new genFunctions();
        gen = new generator(mygen.rangeSeq,1,2);
        assert.equal(gen.next(), 1);
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
});