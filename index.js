const fs = require('fs')
const path = require('path')
const functions = require('firebase-functions')

fs.readdirSync(path.resolve(`${__dirname}/pages`))
  .filter(functionName => !functionName.startsWith("_"))
  .forEach(functionName => {
    exports[functionName] = require(`./pages/${functionName}`)
  })
