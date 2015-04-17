/* globals describe, it */
'use strict';

var expect = require('chai').expect;

describe('A suit', function () {
    it('Expect to be always true', function () {
        expect(true).to.equal(true);
        expect(false).to.equal(false);
        expect(2 + 2).to.equal(4);
        expect('Hello' + ' world!').to.equal('Hello world!');
    });

    it('Expect to be always false', function () {
        expect(true).to.not.equal(false);
        expect(false).to.not.equal(true);
        expect(2 + 2).to.not.equal(5);
        expect('Hello' + ' world!').to.not.equal('Lorem ipsum!');
    });
});
