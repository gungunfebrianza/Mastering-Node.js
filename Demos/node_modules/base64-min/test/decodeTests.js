/*jslint node:true, vars: true*/
/*global describe, it*/
'use strict';

var should = require('chai').should(),
    base64 = require('../base64'),
    decode = base64.decode;
// For encoding test I had used information presented in Base64 Wikipedia Page (English Version).
// For more information: http://en.wikipedia.org/wiki/Base64
describe('# Decoding Tests', function () {

    describe('> Decode strings', function () {

        it('Decode a Wikipedia Leviathan Quote Example', function () {
            //Wikipedia first example: A quote from Thomas Hobbes' Leviathan:
            var leviathanQuote = 'Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.';
            var leviathanQuote64Based = 'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlzIHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2YgdGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGludWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRoZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=';
            decode(leviathanQuote64Based).should.equal(leviathanQuote);
        });
        it('Decoding Base64 Padding Wikipedia examples', function () {
            //Wikipedia Padding examples
            decode('YW55IGNhcm5hbCBwbGVhc3VyZS4=').should.equal('any carnal pleasure.');
            decode('YW55IGNhcm5hbCBwbGVhc3VyZQ==').should.equal('any carnal pleasure');
            decode('YW55IGNhcm5hbCBwbGVhc3Vy').should.equal('any carnal pleasur');
            decode('YW55IGNhcm5hbCBwbGVhc3U=').should.equal('any carnal pleasu');
            decode('YW55IGNhcm5hbCBwbGVhcw==').should.equal('any carnal pleas');
        });

        it('More deconding tests, Base64 with different Paddings', function () {
            //More Wikipedia Padding examples
            decode('cGxlYXN1cmUu').should.equal('pleasure.');
            decode('bGVhc3VyZS4=').should.equal('leasure.');
            decode('ZWFzdXJlLg==').should.equal('easure.');
            decode('YXN1cmUu').should.equal('asure.');
            decode('c3VyZS4=').should.equal('sure.');
        });

        it('Random tests founded on internet', function () {
            //http://examples.javacodegeeks.com/core-java/apache/commons/codec/encode-base64/
            decode('SmF2YWNvZGVnZWVrcw==').should.equal('Javacodegeeks');
            //http://pymotw.com/2/base64/
            decode('VGhpcyBpcyB0aGUgZGF0YSwgaW4gdGhlIGNsZWFyLg==').should.equal('This is the data, in the clear.');
            //http://stackoverflow.com/questions/7360403/base-64-encode-and-decode-example-code
            decode('dGVjaFBhc3M=').should.equal('techPass');
        });

        it('Decode Long Texts', function () {
            //Based in http://www.motobit.com/util/base64-decoder-encoder.asp
            var WikipediaText1 = 'Não se pode pensar em heresia porque não fazia sentido, em tempos de Contra-Reforma, acreditar nos deuses do panteão greco-romano, e a prova é a não censura dos inquisidores aos «Deoses dos Gentios». No episódio da Máquina do Mundo (estrofe 82 do Canto X), é o próprio personagem da deusa Tétis que afirma: «eu, Saturno e Jano, Júpiter, Juno, fomos fabulosos, Fingidos de mortal e cego engano. Só pera fazer versos deleitosos Servimos». No entanto, críticos defendem que esta fala de Tétis foi introduzida a pedido dos Censores, e que várias outras Oitavas foram ou alteradas, ou mesmo cortadas, para que o Poema pudesse ser publicado.';
            var WikipediaText1based64 = 'TuNvIHNlIHBvZGUgcGVuc2FyIGVtIGhlcmVzaWEgcG9ycXVlIG7jbyBmYXppYSBzZW50aWRvLCBlbSB0ZW1wb3MgZGUgQ29udHJhLVJlZm9ybWEsIGFjcmVkaXRhciBub3MgZGV1c2VzIGRvIHBhbnRl428gZ3JlY28tcm9tYW5vLCBlIGEgcHJvdmEg6SBhIG7jbyBjZW5zdXJhIGRvcyBpbnF1aXNpZG9yZXMgYW9zIKtEZW9zZXMgZG9zIEdlbnRpb3O7LiBObyBlcGlz82RpbyBkYSBN4XF1aW5hIGRvIE11bmRvIChlc3Ryb2ZlIDgyIGRvIENhbnRvIFgpLCDpIG8gcHLzcHJpbyBwZXJzb25hZ2VtIGRhIGRldXNhIFTpdGlzIHF1ZSBhZmlybWE6IKtldSwgU2F0dXJubyBlIEphbm8sIEr6cGl0ZXIsIEp1bm8sIGZvbW9zIGZhYnVsb3NvcywgRmluZ2lkb3MgZGUgbW9ydGFsIGUgY2VnbyBlbmdhbm8uIFPzIHBlcmEgZmF6ZXIgdmVyc29zIGRlbGVpdG9zb3MgU2Vydmltb3O7LiBObyBlbnRhbnRvLCBjcu10aWNvcyBkZWZlbmRlbSBxdWUgZXN0YSBmYWxhIGRlIFTpdGlzIGZvaSBpbnRyb2R1emlkYSBhIHBlZGlkbyBkb3MgQ2Vuc29yZXMsIGUgcXVlIHbhcmlhcyBvdXRyYXMgT2l0YXZhcyBmb3JhbSBvdSBhbHRlcmFkYXMsIG91IG1lc21vIGNvcnRhZGFzLCBwYXJhIHF1ZSBvIFBvZW1hIHB1ZGVzc2Ugc2VyIHB1YmxpY2Fkby4=';
            decode(WikipediaText1based64).should.equal(WikipediaText1);
            var WikipediaText2 = "Fanny Bullock Workman was an American geographer, cartographer, explorer, travel writer, and mountaineer, notably in the Himalaya. She was one of the first female professional mountaineers; she not only explored but also wrote about her adventures. She set several women's altitude records, published eight travel books with her husband, and championed women's rights and women's suffrage. Educated in the finest schools available to women, she was introduced to climbing in New Hampshire. She married William Hunter Workman, and traveled the world with him. The couple had two children, but left them in schools and with nurses. Workman saw herself as a New Woman who could equal any man. The Workmans wrote books about each trip and Workman frequently commented on the state of the lives of women that she saw. They explored several glaciers and conquered several mountains of the Himalaya, eventually reaching 23,000 feet (7,000 m), a women's altitude record at the time. Workman became the first woman to lecture at the Sorbonne and the second to speak at the Royal Geographical Society. She received many medals of honor and was recognized as one of the foremost climbers of her day.";
            var WikipediaText2based64 = 'RmFubnkgQnVsbG9jayBXb3JrbWFuIHdhcyBhbiBBbWVyaWNhbiBnZW9ncmFwaGVyLCBjYXJ0b2dyYXBoZXIsIGV4cGxvcmVyLCB0cmF2ZWwgd3JpdGVyLCBhbmQgbW91bnRhaW5lZXIsIG5vdGFibHkgaW4gdGhlIEhpbWFsYXlhLiBTaGUgd2FzIG9uZSBvZiB0aGUgZmlyc3QgZmVtYWxlIHByb2Zlc3Npb25hbCBtb3VudGFpbmVlcnM7IHNoZSBub3Qgb25seSBleHBsb3JlZCBidXQgYWxzbyB3cm90ZSBhYm91dCBoZXIgYWR2ZW50dXJlcy4gU2hlIHNldCBzZXZlcmFsIHdvbWVuJ3MgYWx0aXR1ZGUgcmVjb3JkcywgcHVibGlzaGVkIGVpZ2h0IHRyYXZlbCBib29rcyB3aXRoIGhlciBodXNiYW5kLCBhbmQgY2hhbXBpb25lZCB3b21lbidzIHJpZ2h0cyBhbmQgd29tZW4ncyBzdWZmcmFnZS4gRWR1Y2F0ZWQgaW4gdGhlIGZpbmVzdCBzY2hvb2xzIGF2YWlsYWJsZSB0byB3b21lbiwgc2hlIHdhcyBpbnRyb2R1Y2VkIHRvIGNsaW1iaW5nIGluIE5ldyBIYW1wc2hpcmUuIFNoZSBtYXJyaWVkIFdpbGxpYW0gSHVudGVyIFdvcmttYW4sIGFuZCB0cmF2ZWxlZCB0aGUgd29ybGQgd2l0aCBoaW0uIFRoZSBjb3VwbGUgaGFkIHR3byBjaGlsZHJlbiwgYnV0IGxlZnQgdGhlbSBpbiBzY2hvb2xzIGFuZCB3aXRoIG51cnNlcy4gV29ya21hbiBzYXcgaGVyc2VsZiBhcyBhIE5ldyBXb21hbiB3aG8gY291bGQgZXF1YWwgYW55IG1hbi4gVGhlIFdvcmttYW5zIHdyb3RlIGJvb2tzIGFib3V0IGVhY2ggdHJpcCBhbmQgV29ya21hbiBmcmVxdWVudGx5IGNvbW1lbnRlZCBvbiB0aGUgc3RhdGUgb2YgdGhlIGxpdmVzIG9mIHdvbWVuIHRoYXQgc2hlIHNhdy4gVGhleSBleHBsb3JlZCBzZXZlcmFsIGdsYWNpZXJzIGFuZCBjb25xdWVyZWQgc2V2ZXJhbCBtb3VudGFpbnMgb2YgdGhlIEhpbWFsYXlhLCBldmVudHVhbGx5IHJlYWNoaW5nIDIzLDAwMCBmZWV0ICg3LDAwMCBtKSwgYSB3b21lbidzIGFsdGl0dWRlIHJlY29yZCBhdCB0aGUgdGltZS4gV29ya21hbiBiZWNhbWUgdGhlIGZpcnN0IHdvbWFuIHRvIGxlY3R1cmUgYXQgdGhlIFNvcmJvbm5lIGFuZCB0aGUgc2Vjb25kIHRvIHNwZWFrIGF0IHRoZSBSb3lhbCBHZW9ncmFwaGljYWwgU29jaWV0eS4gU2hlIHJlY2VpdmVkIG1hbnkgbWVkYWxzIG9mIGhvbm9yIGFuZCB3YXMgcmVjb2duaXplZCBhcyBvbmUgb2YgdGhlIGZvcmVtb3N0IGNsaW1iZXJzIG9mIGhlciBkYXku';
            decode(WikipediaText2based64).should.equal(WikipediaText2);
            decode('SXN0byDpIGFwZW5hcyB1bSBncmFuZGUgVEVTVEU=').should.equal('Isto é apenas um grande TESTE');
        });
    });
});
