const fs = require('fs-extra');
/*
Most methods are async by default. All async methods will return a promise if the callback isn't passed.
Sync methods on the other hand will throw if an error occurs.
Also Async/Await will throw an error if one occurs.
*/

// With a callback:
fs.ensureDir('views', err => {
  console.log(err) // => null
  // dir has now been created, including the directory it is to be placed in
})

// With Promises:
fs.ensureDir('views')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (directory) {
  try {
    await fs.ensureDir(directory)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example('views')
