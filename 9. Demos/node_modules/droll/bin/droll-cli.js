#!/usr/bin/env node

"use strict";

var droll = require('../droll');

if (process.argv[2] === undefined) {
  console.error('Missing Formula');
  process.exit(1);
}

if (droll.validate(process.argv[2])) {
  console.log(droll.roll(process.argv[2]).toString());
  process.exit();
} else {
  console.error('Invalid Formula');
  process.exit(1);
}
