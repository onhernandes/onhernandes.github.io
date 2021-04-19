---
title: "map() e filter()"
date: 2021-04-19T20:43:25-03:00
thumbnail: "map_filter.jpg"
thumbnailAlt: "Arte sobre como filtrar um array ou até mesmo criar outro a partir de um array existente!"
images: 
- "/images/zines/arrays-em-js/map_filter.jpg"
description: "Aprenda como reutilizar e criar um novo array a partir de outro usando map() e filter()!"
tag:
- arrays-em-js
zine: "arrays-em-js"
---

## map(fn)

O `map(fn)` recebe uma função e a executa para cada item no array original, criando um novo array a partir do resultado da função!

A função passada recebe como parâmetros: o item atual, seu índice e o array original

```jsx
const nomes = ['Jenifer', 'Kauan']
const pessoas = nomes.map(
  (nome, index, arrayOriginal) => {
    return { nome: nome }
  }
)

console.log(pessoas) // [ { nome: 'Jenifer' }, { nome: 'Kauan' } ]
```

## filter(fn)

Recebe uma função semelhante ao `map(fn)`, utilizando-a para filtrar o array, onde você decide o que deve estar no novo array retornando `true` ou `false`!

```jsx
const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
const pares = numeros.filter(
  (numero, indice, arrayOriginal) => {
    // o número atual é um número par? caso seja, retorna true
    return numero % 2 == 0
  }
)

console.log(pares) // [2, 4, 6, 8]
```
