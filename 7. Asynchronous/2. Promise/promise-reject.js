let promise = new Promise(function(resolve, reject) {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// reject runs the second function in .then
promise.then(
  result => console.log(result), // doesn't run
  error => console.log(error) // shows "Error: Whoops!" after 1 second
);
