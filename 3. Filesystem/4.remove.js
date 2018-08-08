const fs = require('fs-extra');

// remove folder
// With a callback:
fs.remove('views', (err)=>{
  if (err) return console.log(err);
  console.log('success!');
})

// With Promises:
fs.remove('views')
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (src, dest) {
  try {
    await fs.remove('/tmp/myfile')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example()
