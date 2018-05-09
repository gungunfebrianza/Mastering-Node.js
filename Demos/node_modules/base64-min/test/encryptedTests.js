/*jslint node:true*/
/*global describe, it*/
'use strict';

var should = require('chai').should(),
    base64 = require('../base64');

describe('# Encrypted Tests (Encoding and Decoding)', function () {

    var msg = 'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.';

    it('Decode with correct Key', function () {
        var encodedKey = base64.encodeWithKey(msg, '--victor@fern91--');
        base64.decodeWithKey(encodedKey, '--victor@fern91--').should.equal(msg);
        encodedKey = base64.encodeWithKey(msg, 'sjhakshdqio/%&/$%$&/""(!)=#=?)?="89087283');
        base64.decodeWithKey(encodedKey, 'sjhakshdqio/%&/$%$&/""(!)=#=?)?="89087283').should.equal(msg);
        encodedKey = base64.encodeWithKey('any carnal pleasur', '12');
        base64.decodeWithKey(encodedKey, '12').should.equal('any carnal pleasur');
        encodedKey = base64.encodeWithKey('any carnal pleasure', '-..-.-.-.-.-...-..-.-as.-a.s-a.s-a.s');
        base64.decodeWithKey(encodedKey, '-..-.-.-.-.-...-..-.-as.-a.s-a.s-a.s').should.equal('any carnal pleasure');
    });

    it('Trying decode with incorrect Key', function () {
        var encodedKey = base64.encodeWithKey(msg, 'victorfern91');
        base64.decodeWithKey(encodedKey, '--victor@fern91--').should.not.equal(msg);
        base64.decodeWithKey(encodedKey, 'base64-min').should.not.equal(msg);
        base64.decodeWithKey(encodedKey, 'victorfern').should.not.equal(msg);
    });

    it('Trying decode without key', function () {
        var encodedKey = base64.encodeWithKey(msg, '--victor@fern91--');
        base64.decode(encodedKey).should.not.equal(msg);
        base64.encodeWithKey(msg, '');
        base64.decode(encodedKey).should.not.equal(msg);
        base64.encodeWithKey(msg, 'kalshdjahskdhas');
        base64.decode(encodedKey).should.not.equal(msg);
    });

});
