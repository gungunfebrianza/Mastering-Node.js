async function f() {
  await Promise.reject(new Error('Whoops!'));
}

/* Same
async function f() {
  throw new Error('Whoops!');
}
 */
f();
