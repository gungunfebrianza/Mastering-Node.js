# Description

Droll is a JavaScript dice-rolling library. It accepts input in
[standard dice notation](http://en.wikipedia.org/wiki/Dice_notation) and works in both Node.js
and browser environments.

An optional executable is also included in the package for use directly from the command line.

[![Build Status](https://travis-ci.org/thebinarypenguin/droll.svg?branch=master)](https://travis-ci.org/thebinarypenguin/droll)

# Installation

With npm (recommended)

`npm install droll`

Without npm

Download [droll.js](http://raw.github.com/thebinarypenguin/droll/master/droll.js) or
[droll.min.js](http://raw.github.com/thebinarypenguin/droll/master/droll.min.js)


# Usage

Node.js

```javascript
var droll = require('droll');

var result = droll.roll('3d6+1');

console.log(result);
```

Browser

```html
<script src="droll.js"></script>
<script type="text/javascript">

  var result = droll.roll('3d6+1');

  console.log(result);

</script>
```


# Optional Executable

Droll ships with an optional executable that can be installed via npm like this

```
npm install droll -g
```

And used from the command line like this

```
$ droll 3d6+1
6 + 5 + 5 + 1 = 17
```


# Public Methods


### validate(formula)

* __formula__ `String` The dice formula in standard dice notation.

Returns true if `formula` is valid dice notation or false otherwise.


### roll(formula)

* __formula__ `String` The dice formula in standard dice notation.

Rolls the dice defined by `formula` and returns a `DrollResult` object on success or false
otherwise.

The `DrollResult` object contains the following properties

* __rolls__ `Array` The result of each die roll.
* __modifier__ `Number` The optional modifier. The default is 0.
* __total__ `Number` The sum of the rolls plus the modifier.

The `DrollResult` object also has a custom `toString()` method for pretty printing the result.
It returns strings that look like `6 + 5 + 5 + 1 = 17` or `4 + 2 - 1 = 5` or even just `7`.


### parse(formula)

* __formula__ `String` The dice formula in standard dice notation.

Parses `formula` into its component pieces and returns a `DrollFormula` object on success or false
otherwise.

The `DrollFormula` object contains the following properties

* __numDice__ `Number` The number of dice to roll.
* __numSides__ `Number` The number of sides on each die.
* __modifier__ `Number` The optional modifier. The default is 0.
* __minResult__ `Number` The minimum result that can be returned by this formula.
* __maxResult__ `Number` The maximum result that can be returned by this formula.
* __avgResult__ `Number` The average result returned by this formula. ((max + min) / 2)
