/*jslint node:true*/
/*global describe, it*/
'use strict';

var should = require('chai').should(),
    base64 = require('../base64');

describe('# MIME encoding type tests', function () {
    var msg = 'Man is distinguished, not only by his reason, but by this singular passion from ' +
        'other animals, which is a lust of the mind, that by a perseverance of delight ' +
        'in the continued and indefatigable generation of knowledge, exceeds the short ' +
        'vehemence of any carnal pleasure.',
        encodedMIME = 'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz\nIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2Yg\ndGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGlu\ndWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRo\nZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=';
    // Test found in wikipedia base64 page (http://en.wikipedia.org/wiki/Base64#Examples)
    it('Encoding strings (based on http://en.wikipedia.org/wiki/Base64#Examples)', function () {
        base64.encode(msg, 'MIME').should.equal(encodedMIME);
    });

    it('Decoding strings (based on http://en.wikipedia.org/wiki/Base64#Examples)', function () {
        base64.decode(encodedMIME).should.equal(msg);
    });
});
