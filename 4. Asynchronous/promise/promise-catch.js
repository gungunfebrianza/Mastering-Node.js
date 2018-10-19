let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('Whoops!')), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(null); // shows "Error: Whoops!" after 1 second
