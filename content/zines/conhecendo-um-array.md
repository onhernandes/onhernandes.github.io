---
title: "Conhecendo Um Array"
date: 2021-04-02T03:17:11-03:00
thumbnail: "intro.jpg"
thumbnailAlt: "Arte sobre a estrutura de dados chamada array, em JavaScript, explicando o que é e como funciona essa estrutura aparentemente simplista, mas versátil"
description: "O array é uma estrutura de dados onde guardamos e agrupamos informações, como uma lista de compras onde podemos gerenciar quantidade, posição, e muito mais!"
images:
 - "/images/zines/arrays-em-js/intro.jpg"
tag:
- arrays-em-js
zine: "arrays-em-js"
---

## arrays, listas, coleções, etc

O array - também conhecido pelos nomes acima - é uma estrutura de dados onde guardamos e agrupamos informações, como uma lista de compras ou uma coleção de documentos, onde é possível gerenciar quantidade, posição, etc

## Como criar arrays em JavaScript?

Existem duas formas de criar um array: usando a sintaxe literal, ou o protótipo do array.

### Sintaxe literal

Se utiliza apenas os colchetes para declarar o que é um array, separando cada valor por uma vírgula

```javascript
const filmes = [
  'Pantera Negra',
  'Besouro'
]
```

### Usando protótipo Array

Existe uma classe global chamada Array, ao instanciar, ela recebe a quantidade de índices (ou itens) terá no novo array, porém, esses índices estarão vazios. Então é preciso preencher o valor de cada posição:

```javascript
const filmes = new Array(2)
filmes[0] = 'Pantera Negra'
filmes[1] = 'Besouro'
```

## Como saber a quantidade de itens no array? Com length!

`length`  e uma propriedade que possui a quantidade de itens no array:

```javascript
const filmes = [
  'Pantera Negra',
  'Besouro'
]

console.log(filmes.length) // 2
```

mas também, é uma propriedade mutável, ou seja, pode ser alterada, e uma vez que seu valor é reescrito dessa forma, o array é cortado e diminuido para corresponder o valor declarado

```javascript
const filmes = [
  'Pantera Negra',
  'Besouro'
]

filmes.length = 0

console.log(filmes) // []
```

## Como descobrir se uma variável é um array?

Usando a função `Array.isArray(variavel)` é possível saber se o valor é ou não um array, retornando true ou false

```javascript
console.log(Array.isArray(123)) // false
console.log(Array.isArray({})) // false
console.log(Array.isArray([])) // true
```

