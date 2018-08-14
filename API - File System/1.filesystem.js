const fs = require('fs');

/*
The fs module provides an API for interacting with the file system in a manner
closely modeled around standard POSIX functions.
All file system operations have synchronous and asynchronous forms.

The asynchronous form always takes a completion callback as its last argument.
The arguments passed to the completion callback depend on the method,
but the first argument is always reserved for an exception.
If the operation was completed successfully,
then the first argument will be null or undefined.
*/
