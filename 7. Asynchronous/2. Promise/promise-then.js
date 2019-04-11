/* If we’re interested only in successful completions, then we can provide only one function argument to .then: */

let promise = new Promise(resolve => {
  setTimeout(() => resolve('done!'), 1000);
});

promise.then(console.log('Done!')); // shows "done!" after 1 second
