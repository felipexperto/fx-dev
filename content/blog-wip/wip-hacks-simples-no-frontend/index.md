---
authorid: 1
category: Dev
title: "Server-side Rendering (SSR)"
date: "2021-09-18T00:00:00.000Z"
description: ""
tldr: ''
---

Use Non-Blocking CSS

In order to resolve this issue, we can simply use a hack and improve the performance of the application. We want that the browser should not wait for CSS to be downloaded and the CSSOM to be created during the initial page load.

We can delay the CSSOM creation for non-critical CSS resources. Let’s imagine we have some CSS which will be applied to a certain item that will display only after the initial page load. So, we need not make the page load wait for the CSS to be downloaded and parsed.

```
<link rel="stylesheet" href="/path/to/my.css" media="print" onload="this.media='all'">
```

The code above specifies that the “media” value for the CSS is “print”, which means that the CSS won’t be applied initially and will be applied once the user tries to print the page. Along with the link, we have added “onload” functionality which says that once the page is loaded, change the “media” type to “all”, making it available to all media types.

Retirado de: https://javascript.plainenglish.io/simple-css-hack-to-reduce-page-load-time-366f7aaaa3be

























