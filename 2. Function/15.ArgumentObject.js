function sumAll() {
  var i;
  var sum = 0;
  /*JavaScript functions have a built-in
object called the arguments object. The argument object contains an array of the
arguments used when the function was called (invoked). */ for (
    i = 0;
    i < arguments.length;
    i++
  ) {
    sum += arguments[i];
  }
  return sum;
}
console.log(sumAll(1, 123, 500, 115, 44, 88));
