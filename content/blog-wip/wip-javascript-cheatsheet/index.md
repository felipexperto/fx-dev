---
authorid: 1
category: Dev
title: "Javascript Cheatsheet"
date: "2021-09-18T00:00:00.000Z"
description: ""
tldr: ''
---

[How to Check if an Object Is Empty in JavaScript](https://code.tutsplus.com/tutorials/how-to-check-if-an-object-is-empty-in-javascript--cms-37053?utm_campaign=Frontend%2BWeekly&utm_medium=email&utm_source=Frontend_Weekly_257)

```
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}

// or

function isEmptyObject(obj) {
    return Object.getOwnPropertyNames(obj).length === 0;
}

// or

function isEmptyObject(obj){
    return JSON.stringify(obj) === '{}';
}

// or

function isEmptyObject(obj) {
    return Object.entries(obj).length === 0;
}
```

[Always Keep Strict Mode On](https://blog.bitsrc.io/8-steps-to-secure-javascript-in-2021-6d54d5415264)

Having Strict mode on will limit you from writing unsafe code. Besides, its straightforward to enable this mode. It’s as simple as adding the below line as the first in your JavaScript files.

```
use strict
```

When the strict mode is on;

- It throws errors for some errors that were previously kept silent.
- Fixes mistakes that make it difficult for JavaScript engines to perform optimizations.
- Prohibits the use of reserved words likely to be defined in future versions of ECMAScript.
- Throws errors when ‘unsafe’ actions are taken (such as gaining access to the global object).


[Check if the current tab is in view / focus](https://medium.com/dailyjs/13-javascript-one-liners-thatll-make-you-look-like-a-pro-29a27b6f51cb)

```
const isBrowserTabInView = () => document.hidden;
```




[How to Avoid JavaScript Type Conversions](https://blog.bitsrc.io/how-to-avoid-javascript-type-conversions-29e1258f37d8)

[7 JavaScript Features You Probably Don’t Know](https://javascript.plainenglish.io/7-javascript-features-nobody-is-talking-about-4bf61297628c)



[Comparing the two dates in JavaScript](https://reactgo.com/javascript-compare-two-dates/)

[Natively Format JavaScript Dates and Times](https://elijahmanor.com/blog/format-js-dates-and-times)





[The 16 JavaScript debugging tips you probably didn’t know](https://raygun.com/learn/javascript-debugging-tips)

[The #1 tip to familiarize with new JavaScript Codebases](https://www.kevinpeters.net/the-fastest-way-to-understand-new-code-bases)

[How to log JavaScript stack traces and objects using console.trace](https://www.stefanjudis.com/today-i-learned/how-to-log-javascript-stack-traces-using-console-trace/)

[Code Complexity](https://www.npmjs.com/package/code-complexity)  
`npx code-complexity . --filter '**/*.ts,!**/*.spec.ts' --sort complexity`





[Fix 'Cannot read property of undefined'!](https://daveceddia.com/fix-react-errors/)

[Top 8 JavaScript Errors with Solutions](https://blog.replit.com/Top-8-JavaScript-Errors-career-karma)





[286 Favorite JavaScript Utilities in single line of code! No more](https://1loc.dev/)

[Helpers](https://vanillajstoolkit.com/helpers/)





[JavaScript Prototype](https://www.javascripttutorial.net/javascript-prototype) - Em poucas palavras

[JavaScript's Memory Management Explained](https://felixgerschau.com/javascript-memory-management/)

[JavaScript Event Loop And Call Stack Explained](https://felixgerschau.com/javascript-event-loop-call-stack/)

[Understanding the Event Loop, Callbacks, Promises, and Async/Await in JavaScript](https://www.taniarascia.com/asynchronous-javascript-event-loop-callbacks-promises-async-await/)

[Refactoring JavaScript — 5 Common Problems to Look Out for and How to Fix Them](https://blog.bitsrc.io/refactoring-javascript-5-common-problems-to-look-out-for-and-how-to-fix-them-8c79f76b6abc)


[How to Eliminate Render-Blocking Resources: a Deep Dive](https://sia.codes/posts/render-blocking-resources/)

