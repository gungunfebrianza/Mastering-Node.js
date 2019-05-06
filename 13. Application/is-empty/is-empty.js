const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);

console.log(isEmpty('string')); //false
console.log(isEmpty(76)); //false
console.log(isEmpty('')); //true
console.log(isEmpty({})); //true
console.log(isEmpty([])); //true
console.log(isEmpty(null)); //true
console.log(isEmpty(undefined)); //true

//KALO ADA LITERAL YA FALSE LAH! KAN ISEMPTY!!!
