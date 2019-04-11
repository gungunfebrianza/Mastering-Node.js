var x = 1;
console.log('Entering the loop');

while (x < 10) {
  x = x + 1;

  if (x == 5) {
    continue; // skip rest of the loop body
  }
  console.log(x);
}

console.log('Exiting the loop! ');
