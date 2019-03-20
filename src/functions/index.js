const onRequest = require('firebase-functions').https.onRequest

// These pages are all available in dist once `npm run build:app` is run
const index = require('./next/serverless/pages/index')
const firebase = require('./next/serverless/pages/firebase')
const nextjs = require('./next/serverless/pages/nextjs')
const serverless = require('./next/serverless/pages/serverless')

// This index file serves as a function manifest for Firebase Functions
// Firebase Functions treats each named export as its own serverless function
exports.index = onRequest((req, res) => index.render(req, res))
exports.firebase = onRequest((req, res) => firebase.render(req, res))
exports.nextjs = onRequest((req, res) => nextjs.render(req, res))
exports.serverless = onRequest((req, res) => serverless.render(req, res))

// Note that ALL your functions are bundled together!
// Firebase Functions doesn't natively support per-function bundling.
// See https://github.com/firebase/firebase-tools/issues/1163#issuecomment-472071855
