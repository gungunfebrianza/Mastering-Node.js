/*
The process.memoryUsage() method returns an object describing the memory
usage of the Node.js process measured in bytes. heapTotal and heapUsed refer
to V8's memory usage. external refers to the memory usage of C++ objects bound
to JavaScript objects managed by V8. rss, Resident Set Size, is the amount of
space occupied in the main memory device (that is a subset of the total
allocated memory) for the process, which includes the heap, code segment and stack.

The heap is where objects, strings, and closures are stored. Variables are
stored in the stack and the actual JavaScript code resides in the code segment.
*/
console.log(process.memoryUsage());
