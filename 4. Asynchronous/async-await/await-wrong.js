function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
  return result;
}

f();

/* we will get :
SyntaxError: await is only valid in async function */