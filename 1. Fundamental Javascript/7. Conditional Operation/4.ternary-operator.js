let age = 20;
let accessAllowed = age > 18 ? true : false;
console.log(accessAllowed);
console.log('<br/>');

let message =
  age < 3
    ? 'Hi, baby!'
    : age < 18
    ? 'Hello!'
    : age < 100
    ? 'Greetings!'
    : 'What an unusual age!';

console.log(message);

function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(1));
// expected output: "$2.00"
