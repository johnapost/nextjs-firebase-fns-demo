# NextJS on Firebase Functions

This is a demo NextJS app (in serverless mode) for use with Firebase Functions.

Quick reasons:
1. Build quickly with React
1. Server-side rendering for SEO visibility
1. Serverless scaling
1. Easy access to Firebase features

## Why NextJS?
[NextJS](https://nextjs.org) is a React framework optimized out of the box for server-side rendering, which is extremely important for SEO visibility. It also handles routing and server-side logic in a smart way. Check out the project for a detailed overview.

## Why serverless mode?
Pay for the computing that you use. Scale your app without being stuck in the infrastructure weeds. It's a great choice to handle future traffic with little upfront investment.

## Why Firebase Functions?
I recommend Firebase Functions because it provides easy access to the [Firebase](https://firebase.google.com/products/) ecosystem.

Firebase is a great platform for building apps. It's fairly easy set up authentication. It also provides simple integration with [Firestore](https://cloud.google.com/firestore/), a data store that scales with your app usage. Perfect for a weekend project that could become a side business.

That said, your Firebase Functions are actually [Google Cloud Functions](https://firebase.google.com/docs/functions/functions-and-firebase). That's important to remember if you run into issues and start looking for answers.

## Requirements
* Node.js 8.15.0, the latest supported runtime for [Firebase Functions](https://cloud.google.com/functions/docs/concepts/nodejs-8-runtime)

## Getting Started
* [Create your Firebase project](https://console.firebase.google.com/) - Requires Google login.
* `npm install` - Install dependencies
* `npx firebase login` - Requires web browser for Google login.
* `npx firebase use --add` - Select your project when prompted.
* `npx firebase deploy` - Deploy these functions to your project.
* Visit the [Firebase Console](https://console.firebase.google.com/) and select your project.
* Navigate to Hosting in the left-hand navigation.
* Click on the <firebase-project-id>.firebaseapp.com domain and see the demo.

## Important Note:
All your functions are bundled together when uploading to Firebase. That means that with sufficient routes you may hit the [Max deployment size quota](https://cloud.google.com/functions/quotas). Plan accordingly!

[See this comment.](https://github.com/firebase/firebase-tools/issues/1163#issuecomment-472071855)
