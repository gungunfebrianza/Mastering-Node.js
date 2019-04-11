var grade = 'A';
console.log('Entering switch block>');
switch (grade) {
  case 'A':
    console.log('Good job');
  case 'B':
    console.log('Pretty good');
  case 'C':
    console.log('Passed');
  case 'D':
    console.log('Not so good');
  case 'F':
    console.log('Failed');
  default:
    console.log('Unknown grade');
}
console.log('Exiting switch block');
