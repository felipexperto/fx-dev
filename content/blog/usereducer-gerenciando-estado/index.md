---
authorid: 1
category: Dev
tags:
  - blog/category/dev
title: useReducer - Gerenciando estado no React
date: "2025-06-15T00:00:00.284Z"
description: "UseReducer pode gerenciar estados complexos de maneira mais organizada e previsível?"
---

Um dia desses estava navegando pelo LinkedIn e vi um post com esse título: **useReducer é a melhor maneira de lidar com estado mas vocês não estão prontos para essa conversa**.

Passado um tempo, pesquisei e quis botar em prática. 

Basicamente, quando você tem um estado complexo no seu componente, por exemplo, um formulário de cadastro, o `useState` começa a te dar dores de cabeça. Vejamos como não fica muito bonito:

```js
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [endPlate, setEndPlate] = useState('');
  const [price, setPrice] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [version, setVersion] = useState('');
```

Aí entra o `useReducer` como uma solução mais semântica e escalável para formular estados complexos, gerenciamento de UI, step forms...

- A lógica de atualização fica centralizada num reducer puro.
- O estado vira um objeto estruturado, e não uma coleção de useStates soltos.
- Fica fácil aplicar técnicas inspiradas em Redux, como action types, payloads, e reset state.

<iframe src="https://codesandbox.io/embed/hsgnqn?view=editor+%2B+preview&module=%2Fsrc%2Fcomponents%2FExampleComponent.js&expanddevtools=1"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="naughty-jepsen-hsgnqn"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
