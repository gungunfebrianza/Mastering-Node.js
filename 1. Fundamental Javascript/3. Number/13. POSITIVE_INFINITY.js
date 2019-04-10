function checkNumber(bigNumber) {
  if (bigNumber === Number.POSITIVE_INFINITY) {
    return 'Process number as Infinity';
  }
  return bigNumber;
}

console.log(checkNumber(Number.MAX_VALUE));
// expected output: 1.7976931348623157e+308

console.log(checkNumber(Number.MAX_VALUE * 2));
// expected output: Process number as Infinity

// The Number.POSITIVE_INFINITY property represents the positive Infinity value.

/* The value of Number.POSITIVE_INFINITY is the same as the value of the global object's Infinity property.

This value behaves slightly differently than mathematical infinity:

    Any positive value, including POSITIVE_INFINITY, multiplied by POSITIVE_INFINITY is POSITIVE_INFINITY.
    Any negative value, including NEGATIVE_INFINITY, multiplied by POSITIVE_INFINITY is NEGATIVE_INFINITY.
    Any positive number divided by POSITIVE_INFINITY is positive Zero.
    Any negative number divided by POSITIVE_INFINITY is negative Zero.
    Zero multiplied by POSITIVE_INFINITY is NaN.
    NaN multiplied by POSITIVE_INFINITY is NaN.
    POSITIVE_INFINITY, divided by any negative value except NEGATIVE_INFINITY, is NEGATIVE_INFINITY.
    POSITIVE_INFINITY, divided by any positive value except POSITIVE_INFINITY, is POSITIVE_INFINITY.
    POSITIVE_INFINITY, divided by either NEGATIVE_INFINITY or POSITIVE_INFINITY, is NaN.

You might use the Number.POSITIVE_INFINITY property to indicate an error condition that returns a finite number in case of success. Note, however, that isFinite would be more appropriate in such a case.

Because POSITIVE_INFINITY is a static property of Number, you always use it as Number.POSITIVE_INFINITY, rather than as a property of a Number object you created.  */
