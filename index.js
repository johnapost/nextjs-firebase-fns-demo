const fs = require('fs')
const path = require('path')
const functions = require('firebase-functions')

// Generate named function exports for Firebase Functions
fs.readdirSync(path.resolve(`${__dirname}/pages`))
  // Filter out utility files that start with _ in pages directory
  .filter(fileName => !fileName.startsWith("_"))
  .forEach(fileName => {
    const page = require(`${__dirname}/pages/${fileName}`)
    // Remove .js for function name
    const functionName = fileName.slice(0, -3)
    exports[functionName] = functions.https.onRequest(
      (req, res) => page.render(req, res)
    )
  })
