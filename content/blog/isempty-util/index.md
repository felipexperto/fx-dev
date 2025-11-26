---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: isEmpty - Um util bem útil
date: "2025-11-26T00:00:00.284Z"
description: "isEmpty - Um util bem útil"
---


```js
  const isEmpty = (obj: any | Record<string, unknown>) =>
    !Object.entries(obj || {}).length && !obj?.length && !obj?.size;

  export default isEmpty;
```

Esse é o post.
