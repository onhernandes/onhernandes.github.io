---
title: "Percorrendo arrays em Javascript"
date: 2020-11-04T12:24:58-03:00
draft: false
toc: false
images:
  - "/images/black-and-white-image-of-man-jogging-on-beach.jpg"
description: "Tenho certeza de que você já mexeu com arrays em Javascript, mas você sabe como percorrer suas informações? Existem várias formas e nesse artigo eu apresento algumas delas :)"
tags:
  - javascript
  - nodejs
  - arrays
  - for
  - forEach
---

## Como acessar tudo que um array possui?

Para acessar os valores de um array, temos várias formas, mas hoje falaremos de duas: for e forEach. São loops (laços), com eles conseguimos executar uma ou várias funções para cada item do array

### forEach()

O `forEach()` é uma função nativa do array que recebe como único uma função que será executada em cada item do array. Essa função recebe o item atual e seu índice, e por último, o array original que está sendo acessado

Exemplo:

```jsx
const numeros = [1, 2, 3, 4, 5]

numeros.forEach((num, indice, array) => {
  // exibe um número por vez
  console.log(numero)
})
```

### for()

O `for()` é um fluxo contínuo que pode durar para sempre, ou até quando você quiser. Aceita algumas expressões entre seus parênteses para declara como e quando parar de executar o fluxo. Tudo que estiver dentro das chaves será executado até que uma instrução `break` aconteça dentro das chaves, ou até que sua expressão termine

A versão mais simples e mais utilizada, possui 3 elementos principais: inicialização, condição e expressão final:

```jsx
const letras = ['a', 'b', 'c']

for (
  let indice = 0; // inicialização, começando com uma variável representando o índice inicial de 0
  indice < letras.length; // condição, quando o fluxo deve parar, no caso, vai continuar enquanto o índice for menor do que o tamanho do array letras
  indice++ // expressão final, ou seja, o que vai acontecer em toda vez que ele executar uma iteração? no caso, adicionamos + 1 a variável de índice
) { 
  const letra = letras[indice] 
}
```

### acessando os índices e valores com for()

Javascript também nos da uma outra forma de usar o `for()`, nos permitindo acessar apenas os valores diretamente, sem necessidade de declarar os 3 elementos que vimos anteriormente:

```jsx
const letras = ['a', 'b', 'c']

for (const valor of letras) {
  // iterando por cada valor do array,
  // a variável valor será 'a', depois 'b', etc
}
```

Outra forma possível é acessar os índices que um array pode ter, com uma sintaxe bem semelhante:

```jsx
const letras = ['a', 'b', 'c']

for (const indice in letras) {
  // iterando por cada índice do array,
  // a variável indice será 0, depois 1, etc
}
```
