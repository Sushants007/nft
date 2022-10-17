const os = require ('os');

//info about cureent user
const user = os.userInfo();
console.log(user)
//,ethod return the sys uptime in sec
console.log(`the system uptime is ${os.uptime()}seconds`)

const currentOS={
    name:os.type(),
    release: os.release(),
    totalMen:os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)