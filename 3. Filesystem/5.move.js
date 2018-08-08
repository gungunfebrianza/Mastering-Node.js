const fs = require('fs-extra');

const srcpath = 'data_renamed.html'
const dstpath = 'views/data_renamed_moved.html.txt'

// With a callback:
fs.move('data.html', 'data_renamed.html', { overwrite: false }, err => {
  if (err) return console.error(err)

  console.log('success!')
})

// With Promises:
fs.move(srcpath, dstpath)
.then(() => {
  console.log('success!')
})
.catch(err => {
  console.error(err)
})

// With async/await:
async function example (src, dest) {
  try {
    await fs.move(srcpath, dstpath)
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

example(srcpath, dstpath)
