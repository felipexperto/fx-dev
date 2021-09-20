---
authorid: 1
category: Dev
title: React tips
date: "2021-09-18T00:00:00.000Z"
description: ""
tldr: ''
---



If you want to use a variable inside your component which should keep its value between rendering but also don't force a rerender, you can use the useRef hook. It will keep the value, but doesn't force the component to rerender.

```
function ClickButton(props) {
  const count = useRef(0);

  const onClickCount = () => {
    count.current++;
  };

  const onClickRequest = () => {
    apiCall(count);
  };

  return (
    <div>
      <button onClick={onClickCount}>Counter</button>
      <button onClick={onClickRequest}>Submit</button>
    </div>
  );
}
```
Retirado de: [Five common mistakes writing react components (with hooks) in 2020 ](https://dev.to/loweisz/five-common-mistakes-writing-react-components-with-hooks-in-2020-2ac3)


How to avoid memory leaks when fetching data inside components that

```
const fetchPosts = useCallback(async (controller)) => {
  try { 
    rendersetIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      signal: controller.signal
    });
    const posts = await response.json();
    setPosts(posts);
  } catch (error) {
    if (error.name === 'AbortError') console.log('Request aborted!');
    else console.error(error);
  } finally {
    if(!controller.signal.aboerted) setIsLoading(false);
  }
}, []);

useEffect(() => {
  const controller = nwe AbortController;
  fetchPosts(controller);
  return () => controller.abort();
}. []);
```
Retirado de: [Cancel Properly HTTP Requests in React Hooks and avoid Memory Leaks](https://dev.to/viclafouch/cancel-properly-http-requests-in-react-hooks-and-avoid-memory-leaks-pd7)


Fixing memory leaks in web applications
https://nolanlawson.com/2020/02/19/fixing-memory-leaks-in-web-applications/

Causes of Memory Leaks in JavaScript and How to Avoid Them 
https://www.ditdot.hr/en/causes-of-memory-leaks-in-javascript-and-how-to-avoid-them



React Project Structure Best Practices for Scalable Application 
https://dev.to/syakirurahman/react-project-structure-best-practices-for-scalable-application-18kk

10 React security best practices
https://snyk.io/blog/10-react-security-best-practices

How to use React Context like a Pro
https://devtrium.com/posts/how-use-react-context-pro


How and when to force a React component to re-render
https://blog.logrocket.com/how-when-to-force-react-component-re-re

How I structure my React projects 
https://dev.to/larswaechter/how-i-structure-my-react-projects-jii

5 React performance optimization techniques
https://blog.logrocket.com/5-react-performance-optimization-techniques/

React Project Folder Structure
https://dev.to/knitesh/react-project-folder-structure-30cm

Guidelines to improve your React folder structure
https://maxrozen.com/guidelines-improve-react-app-folder-structure



5 Techniques for Bundle Splitting and Lazy Loading in React
https://blog.bitsrc.io/5-techniques-for-bundle-splitting-and-lazy-loading-in-react-b471004335f5


How to Hide your React Source Code from Chrome Dev Tools when Deployed to Production 
https://dev.to/myogeshchavan97/how-to-hide-your-react-source-code-from-getting-displayed-in-chrome-dev-tools-when-deployed-to-production-41j7

React Props Cheatsheet: 10 Patterns You Should Know 
https://dev.to/reedbarger/react-props-cheatsheet-10-patterns-you-should-know-1m2j

Intro to React Server Side Rendering
https://javascript.plainenglish.io/intro-to-react-server-side-rendering-3c2af3782d08

7 code smells in your React components 
https://dev.to/awnton/7-code-smells-in-react-components-5f66

