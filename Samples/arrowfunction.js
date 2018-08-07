setInterval(() => { // arrow function to the rescue!
  console.log(this);
  console.log(this.count++);
}, 1000);
