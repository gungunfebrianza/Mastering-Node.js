const math = require('mathjs')
const limitedEval = math.eval

math.import({
  'import':     function () { throw new Error('Function import is disabled') },
  'createUnit': function () { throw new Error('Function createUnit is disabled') },
  'eval':       function () { throw new Error('Function eval is disabled') },
  'parse':      function () { throw new Error('Function parse is disabled') },
  'simplify':   function () { throw new Error('Function simplify is disabled') },
  'derivative': function () { throw new Error('Function derivative is disabled') }
}, {override: true})

console.log(limitedEval('sqrt(16)'))     // Ok, 4
console.log(limitedEval('parse("2+3")')) // Error: Function parse is disabled
