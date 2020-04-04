const path = require('path')
const fs = require('fs')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// // Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, 
// err => {
//     if (err) throw err;
//     console.log('Floder created...')
// })


// Create and write to file
function write () {
    fs.writeFile(
        path.join(__dirname, 'test', 'hello.txt'), 
        'Hello World.', 
        err => {
            if (err) throw err;
            console.log('File written to...');
        }
    )
    // if run twice, it will be overwrittern
}


// append content
function append () {
    fs.appendFile(
        path.join(__dirname, 'test', 'hello.txt'), 
        ` I love JavaScript.`, 
        err => {
            if (err) throw err;
            console.log('File written to...')
        }
    )
}


// Read File
function read () {
    fs.readFile(
        path.join(__dirname, 'test', 'hello.txt'), 
        'utf8', 
        (err, data) => {
            if (err) throw err;
            console.log(data)
        }
    )
}


write()
append()
read()