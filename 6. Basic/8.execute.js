  const execute = require('child_process').exec;

  execute('dd Update', (err,stdout)=>{
    if (err) {
      return err;
    }
    console.log(stdout);
  })
