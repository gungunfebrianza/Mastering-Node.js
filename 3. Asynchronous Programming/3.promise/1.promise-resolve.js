// We'll use the new keyword to create a new instance of a promise.
var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hey. It worked!');
 }, 2500);

});

somePromise.then((message) => {
  console.log('\n Success: ', message);
})
