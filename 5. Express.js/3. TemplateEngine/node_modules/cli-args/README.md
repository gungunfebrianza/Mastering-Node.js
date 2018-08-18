# cli-args

<a href="https://nodei.co/npm/cli-args/"><img src="https://nodei.co/npm/cli-args.png?downloads=true"></a>

[![Build Status](https://travis-ci.org/joaquimserafim/cli-args.png?branch=master)](https://travis-ci.org/joaquimserafim/cli-args)


####summary
small command line parser 


**V1**

####app

	var args = require('cli-args')
			
			
####example

	var args = require('cli-args')(process.argv.slice(2));
	console.dir(args);
	
.

	$ node ex1.js -a hello -b world -c 2014.5 --hello
	{ _: ['hello'], a: 'hello', b: 'world', c: 2014.5 }
	
.
	
	$ node ex2.js --date="2014-05-23T12:00:00" --port=80 --clean=false foo --exit
	{ 
		_: ['foo', 'exit'],
		date: Thu May 23 2014 12:00:02 GMT+0100 (WEST),
		port: 80,
		clean: false
	}


