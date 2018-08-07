function Counter() {

  this.count = 0;

  setInterval(() => {

    console.log(this)

    console.log(this.count++);

  }, 1000);

}

new Counter();
