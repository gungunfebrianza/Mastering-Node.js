'use strict';

var test = require('tape');
var parser = require('./');

test('run cli-args', function(assert) {
  assert.deepEqual(
    parser(),
    {_: ['test.js']}
  );

  assert.deepEqual(
    parser(['-P', '80']),
    {_: [], P: 80},
    'parse a number (ex: web server port)- `-P 80` - P: 80'
  );

  assert.deepEqual(
    parser(['hello', 'world', '556.7']),
    {_: ['hello', 'world', 556.7]},
      'parse an array of args - `hello world 556.7`' +
      ' - [\'hello\', \'world\', 556.7]'
  );

  assert.deepEqual(
    parser(['--date=2014-05-29T12:00:02']),
    {_: [], date: new Date('2014-05-29T12:00:02')},
      'parse a date - `--date=Thu May 29 2014 13:00:02 GMT+0100 (WEST)`' +
      ' - date: Thu May 29 2014 13:00:02 GMT+0100 (WEST)');

  assert.deepEqual(
    parser(['--null_arg=null']),
    {_: [], 'null_arg': null},
    'parse a null value - `--null_arg=null` - null_arg: null'
  );

  assert.deepEqual(
    parser(['--undefined_arg=undefined']),
    {_: [], 'undefined_arg': undefined},
      'parse a undefined value - `--undefined_arg=undefined`' +
      ' - undefined_arg: undefined'
  );

  assert.deepEqual(
    parser(['--reboot=false']),
    {_: [], reboot: false},
    'parse a boolean - reboot: false'
  );

  assert.deepEqual(
    parser([
      '--port=80',
      '--helloWorld',
      'test1', 'test2',
      '--app=hello',
      '--status=true',
      '--clean=null',
      '-a', '122.2',
      '-b', 'undefined',
      '-c', '2012-09-11T11:00:00',
      '122.5'
    ]),
    {
      _: ['helloWorld', 'test1', 'test2', 122.5],
      a: 122.2,
      app: 'hello',
      b: undefined,
      c: new Date('2012-09-11T11:00:00'),
      clean: null,
      port: 80,
      status: true
    },
      'parsing a big arguments line - ' +
      '--port 80 test1 test2 --app=hello --status=true --clean=null' +
      ' --a 122.2 --b undefined --c "2012-09-11T11:00:00" 122.5');

  assert.end();
});
