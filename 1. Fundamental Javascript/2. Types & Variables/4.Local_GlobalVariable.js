var myVars = 'global'; // Declare a global variable
function checkScope() {
  var myVars = 'local'; // Declare a local variable
  console.log(myVars);
}
console.log(myVars);
console.log(checkScope());
