
var exec = require('child_process').exec;

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

    //Shortens the string from the beginning to the first double line break after a certain word (in this case 'Testing'), and then turns it into an array
    const selectedArray = out.substring(out.indexOf("^[a-zA-Z0-9]+$"), out.indexOf('\n\n', out.indexOf('Testing'))).trim().split('\n');
    console.log(selectedArray);

    //Assigns values to an object based on whether the test passed or not.
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

    // If none of the tests fail, it changes the object's passed value to true
    if (!Object.values(objToSend.tests).includes(false)) {
        objToSend.passed = true;
    }

    console.log(objToSend);

    //Puts object into JSON object
    const jsonObject = JSON.stringify(objToSend);
    console.log(jsonObject);

    return jsonObject;
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

