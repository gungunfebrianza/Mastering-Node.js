var grade = 'A';
console.log('Entering switch block');
switch (grade) {
  case 'A':
    console.log('Good job');
    break;

  case 'B':
    console.log('Pretty good');
    break;

  case 'C':
    console.log('Passed');
    break;

  case 'D':
    console.log('Not so good');
    break;

  case 'F':
    console.log('Failed');
    break;

  default:
    console.log('Unknown grade');
}
console.log('Exiting switch block');
