
var exec = require('child_process').exec;

// let string;

exec('mocha', ['test.js'], function(error, out, err) {
    if (error !== null) {
        console.log(error);
    }
    const objToSend = {
        q: 'Q1',
        passed: false, 
        tests: {}
    };
    console.log(out);
    const selectedArray = out.substring(out.indexOf("^[a-zA-Z0-9]+$"), out.indexOf('\n\n', out.indexOf('Testing'))).trim().split('\n');
    console.log(selectedArray);
    selectedArray.forEach((string, i) => {
        if (i === 0) {
            objToSend.q = string.trim();
        }
        else if (!/\d/.test(string)) {
            const id = `T${i}`;
            objToSend.tests[id] = true;
        }
        else {
            const id = `T${i}`;
            objToSend.tests[id] = false;
        }
    });

    if (!Object.values(objToSend.tests).includes(false)) {
        objToSend.passed = true;
    }

    console.log(objToSend);
    const jsonObject = JSON.stringify(objToSend);
    console.log(jsonObject);

    return jsonObject;
});

// console.log(string);

// var String=string.substring(string.lastIndexOf("Testing")+1,string.lastIndexOf("passing"));

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

