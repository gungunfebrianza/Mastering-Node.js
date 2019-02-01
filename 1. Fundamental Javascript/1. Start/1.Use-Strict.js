// Defines that JavaScript code should be executed in "strict mode".
'use strict';

// This will cause an error because x is not declared
x = 3.14; //ReferenceError: x is not defined

// Declared inside a function,
// it has local scope (only the code inside the function is in strict mode):
myFunction();
function myFunction() {
  ('use strict');
  y = 3.14; // This will cause an error. ReferenceError: y is not defined
}
