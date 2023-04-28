const { john, peter } = require("./names");
const sayHi = require("./utils");
const data = require("./alternative-flavor");
require("./mind-granade")


console.log(john);
console.log(peter);
sayHi("susan")

// console.log(data)
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)