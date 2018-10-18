async function f() {
  return 1;
}

async function g() {
  return Promise.resolve(1);
}

f().then(result => console.log(result)); 
// 1

g().then(result => console.log(result)); 
//same output promise : 1
