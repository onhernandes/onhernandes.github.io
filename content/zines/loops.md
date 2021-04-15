---
title: "Loops"
date: 2021-04-14T23:16:38-03:00
thumbnail: "loops.jpg"
thumbnailAlt: "Arte sobre como iterar os valores de um array em JavaScript utilizando forEach() e for()"
images: 
- "/images/zines/arrays-em-js/loops.jpg"
description: "Aprenda as diversas formas de se iterar um array utilizando forEach() e for()!"
tag:
- arrays-em-js
zine: "arrays-em-js"
---

## Iterando um array e seus valores!

## Como acessar tudo que um array tem?

Usando loops (ou laços), podemos executar uma ou várias funções para cada item dentro do nosso array usando `for()` e `forEach()` .

## forEach(fn)

Aeita uma função como parâmetro, que por sua vez é executada em todo o array, item por item. Ao ser exxecutada, a função recebe o valor atual da iteração, seu índice e o array original.

```jsx
const numeros = [1, 2, 3, 4, 5]
numeros.forEach((numero, indice, arrayOriginal) => {
  // exibe um numero por vez
  console.log(numero)
})
```

## for()

O `for()` é um fluxo contínuo, que pode ou não funcionar para sempre (bom, até o processo ser terminado), baseando-se nas expressões que recebe para controlar seu fluxo de iteração.

### for(inicialização, condição, expressão final)

Essa é a forma mais comum do `for()`, onde declaramos expressões para indicar o ínicio do nosso loop, uma condição para continuar funcionando ou não, e uma expressão final que é executada em cada iteração.

```jsx
const letras = ['a', 'b', 'c']

for (
  let indice = 0; // Inicializaçao
  indice < letras.length; // Condicao
  indice++ // Expressao final
) {
  const letra = letras[indice]
}
```

### for(const valor of array)

Graças as atualizações do ECMAScript, temos mais formas de iterar utilizando o for, como por exemplo, iterando diretamente pelo valor de um array:

```jsx
const letras = ['a', 'b', 'c']

for (const valor of letras) {
  // iterando por cada valor do array, 
  // a variavel "valor" sera 'a', depois 'b', etc
}
```

### for(const indice in array)

Muito semelhante ao anterior, porém, a iteração é pelo índice de um array:

```jsx
const letras = ['a', 'b', 'c']

for (const indice in letras) {
  // indice de cada letra no array
}
```
