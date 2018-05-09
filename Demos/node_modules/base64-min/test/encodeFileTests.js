/*jslint node:true*/
/*global describe, it*/
'use strict';

var should = require('chai').should(),
    base64 = require('../base64'),
    fs = require('fs');

describe('# Encode/Decode File to String and String to File', function () {
    var encodedImage = 'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAADAFBMVEUBAAAAAAAAgACAgAAAAICAAIA' +
        'AgIDAwMDA3MCmyvD//8z//5n//2b//zP/zP//zMz/zJn/zGb/zDP/zAD/mf//mcz/mZn/mWb/mTP/mQD/Zv//Zsz/Zpn/Zmb/Z' +
        'jP/ZgD/M///M8z/M5n/M2b/MzP/MwD/AMz/AJn/AGb/ADPM///M/8zM/5nM/2bM/2bM/zPM/wDMzP/MzMzMzJnMzGbMzDPMzAD' +
        'Mmf/MmczMmZnMmWbMmTPMmQDMZv/MZszMZpnMZmbMZjPMZgDMM//MM8zMM5nMM2bMMzPMMwDMAP/MAMzMAJnMAGbMADPMAACZ/' +
        '/+Z/8yZ/5mZ/2aZ/zOZ/wCZzP+ZzMyZzJmZzGaZzDOZzACZmf+ZmcyZmZmZmWaZmTOZmQCZZv+ZZsyZZpmZZmaZZjOZZgCZM/+' +
        'ZM8yZM5mZM2aZMzOZMwCZAP+ZAMyZAJmZAGaZADOZAABm//9m/8xm/5lm/2Zm/zNm/wBmzP9mzMxmzJlmzGZmzDNmzABmmf9mm' +
        'cxmmZlmmWZmmTNmmQBmZv9mZsxmZplmZmZmZjNmZgBmM/9mM8xmM5lmM2ZmMzNmMwBmAP9mAMxmAJlmAGZmADNmAAAz//8z/8w' +
        'z/5kz/2Yz/zMz/wAzzP8zzMwzzJkzzGYzzDMzzAAzmf8zmcwzmZkzmWYzmTMzmQAzZv8zZswzZpkzZmYzZjMzZgAzM/8zM8wzM' +
        '5kzM2YzMzMzMwAzAP8zAMwzAJkzAGYzADMzAAAA/8wA/5kA/2YA/zMAzP8AzMwAzJkAzGYAzDMAzAAAmf8AmcwAmZkAmWYAmTM' +
        'AmQAAZv8AZswAZpkAZmYAZgAAZjMAM/8AM8wAM5kAM2YAMzMAMwAAAMwAAJkAAGYAADPdAAC7AACqAACIAAB3AABVAABEAAAiA' +
        'AAA3QAAuwAAqgAAiAAAdwAAVQAARAAAIgDd3d1VVVV3d3d3d3dEREQiIiIREREAAHcAAFUAAEQAACL/+/CgoKSAgID/AAAA/wD' +
        '//wAAAP//AP8A//////8VnwG2AAAAAXRSTlMAQObYZgAAAXFJREFUeNptk79uwjAQh3+XBakZarGgCDowFZWJ9gl4BlaywIZ4j' +
        'K7dEFu7JHOXPgBrlpaFoZ1QJRBigS506ELPdpzYDlb+2d/nO/vkEJxGOMMfcXp1HDyFPM7NVWyBeviGr5DD3x+0crgkSM4vqVi' +
        '8FHKulOWFFJr3FxWFbL6ePcGPQh5fjxauQh5Hu8iuFbL4FLNpG/2XtqWcqTJfJVEPyTlCvn6eV65RmYqDCD0ekSVQXM+XX5rLN' +
        'Rilb5CZb+3CRHEK8dwVt6YOcVok0rtgPq+VQsx3ochVSA4WOroOsY5aRmF+fAXG26YS4qJ2ucJ8Q1dfQSiaw4QsjjQTHaksN1u' +
        '0ws/rSAxBFmfhAxP0lkfgd9MKRSYe/RRsYDIfvNHgBDRzwVLSbPUH1DD+OWHfCKJhcWDMRrJgdUY3uNk19ohgCUaRxh1forPD7' +
        'p55Yh17Xa7cCMJ6BE9wlZHESLx/M1dkk5i5L2glsfoVgRWb4x8LV6fydb382AAAAABJRU5ErkJggg==',

        path = './test/test_assets/hello-world',
        originalFile = path + '.png',
        testFile = path + '-test-generated.png';

    it('Encode hello word png to base 64 string', function () {
        base64.encodeFile(originalFile).should.equal(encodedImage);
    });

    it('Encode hello word png base64 string to file', function () {
        var originalRawFile = fs.readFileSync(originalFile, 'utf8'),
            covertedFile;
        base64.decodeToFile(encodedImage, testFile);
        covertedFile = fs.readFileSync(testFile, 'utf8');
        covertedFile.should.equal(originalRawFile);
    });
});
