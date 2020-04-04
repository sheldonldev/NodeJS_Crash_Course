const os = require('os')

// Platform
console.log(os.platform())

// CPU arch
console.log(os.arch());

// CPU core info
console.log(os.cpus())

// Memory
console.log(os.freemem())
console.log(os.totalmem())

// home dir
console.log(os.homedir())

// Up time
console.log(os.uptime())