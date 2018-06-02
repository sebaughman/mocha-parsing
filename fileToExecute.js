
var exec = require('child_process').exec;

exec('mocha', ['test.js'], function(error, out, err) {
    if (error !== null) {
        console.log(error);
    }
    console.log(out);
    console.log(err);
    return out
});


// const { spawn } = require('child_process');

// const ls = spawn('mocha', ['test.js']);

// ls.stdout.on('data', (data) => {
//     console.log(`stdout: ${data}`);
//   });
  
//   ls.stderr.on('data', (data) => {
//     console.log(`stderr: ${data}`);
//   });
  
//   ls.on('close', (code) => {
//     console.log(`child process exited with code ${code}`);
//   });

