const fs = require('fs')

let apps = fs.readdirSync('apps')

console.log(apps);