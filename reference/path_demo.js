const path = require('path')

// Basic file name
console.log(__filename)
console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))

// Create path objects
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// Concatenate paths
console.log(path.join(__dirname, '..', 'test', 'hello.html'))