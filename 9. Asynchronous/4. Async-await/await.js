// Here’s example with a promise that resolves in 1 second:
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  let result = await promise; // wait till the promise resolves (*)

  console.log(result);// "done!"
}

f();