---
title: "Conhecendo Maps em Js"
date: 2020-11-23T15:01:59-03:00
draft: false
toc: false
description: "Você já ouviu falar do Map em JS? Não?! Então é hora de descobrir! Muito parecido com um objeto literal, mas com umas coisinhas a mais :p"
images:
 - "/images/interior-of-store-with-vinyl-records.jpg"
tags:
  - javascript
  - array
  - sets
  - maps
  - lista
  - dicionario
  - dict
  - boas praticas
  - tipos de dados
  - nodejs
---

Lembra do artigo sobre [Sets](https://onhernandes.dev/artigos/conhecendo-sets-em-js/)? Então, dessa vez vamos falar sobre Maps, uma coleção de valores semelhante ao objeto literal!

Sim, você consegue trabalhar com pares de chaves e valores, mas de uma forma especial!

### Problemas com o objeto literal

Conhecemos hoje em dia, o objeto literal, que é:

```jsx
const objeto = {
	idade: 40
}
objeto.nome = 'João'
objeto['sobrenome'] = 'Alberto Silveira Freitas'

console.log(objeto)
```

Podemos manuseá-lo de diversas formas, mas veja que declaramos primeiro a idade, nome e sobrenome. Nessa ordem. Se executarmos esse código acima, vamos obter a seguinte saída:

```jsx
{ idade: 40, nome: 'João', sobrenome: 'Alberto Silveira Freitas' }
```

E se removermos a idade e depois inserirmos novamente?

```jsx
const objeto = {
	idade: 40
}
objeto.nome = 'João'
objeto['sobrenome'] = 'Alberto Silveira Freitas'
delete objeto.idade
objeto.idade = 40
console.log(objeto)
```

O resultado será...

```jsx
{ nome: 'João', sobrenome: 'Alberto Silveira Freitas', idade: 40 }
```

Notou alguma diferença? A ordem das propriedades. A propriedade "idade" está por último, porém, quando declaramos no começo, estava em primeira posição, então o que aconteceu·?

Bom, o objeto literal não mantém a ordem de suas chaves, e as vezes isso pode ser crucial para sua aplicação. É aí que o Map entra em cena, representando um dicionário com chaves e valores, assim como o nosso objeto literal. 

### Diferenças entre Map e Object

A diferença é que o Map manteḿ a ordem de criação das chaves, e melhor ainda, qualquer coisa serve como uma chave - número, string, função, objeto, `NaN`, etc. Além disso, com um objeto comum, teremos algumas chaves inesperadas, como `prototype` sendo que no Map não teremos. 

Sem contar que para iterar sobre um objeto, precisamos fazer algum tipo de workaround, como usar a função `Object.keys` ou `Object.values` para conseguir iterar com sucesso - já com o Map, temos a função `forEach`, sem contar `entries`, `keys` e `values`.

Por último, segundo a documentação da Mozila, o Map chega a ser mais performático que o objeto quando precisamos trabalhar com cenários envolvendo adição e remoção de chaves e valores de um dicionário.

### Conhecendo a sintaxe do Map

Para representar nosso exemplo anterior com o Map:

```jsx
const dicionario = new Map()
dicionario.set('idade', 40)
dicionario.set('nome', 'João')
dicionario.set('sobrenome', 'Alberto Silveira Freitas')
```

Além disso, temos algumas funções especiais. Quer saber o total de pares de chave e valor dentro do Map?

```jsx
dicionario.size // 3 = idade, nome, sobrenome
```

E se você quiser obter um único valor?

```jsx
dicionario.get('idade') // retorna o valor, ou undefined
```

Ok, mas como saber se uma chave existe?

```jsx
dicionario.has('idade') // true ou false
```

Como faço para apagar um valor?

```jsx
dicionario.delete('idade') // retorna true caso a chave exista e tenha sido removida, falso caso não tenha conseguido
```

E para iterar?

```jsx
dicionario.values() // Iterator, 40, João, Alberto Silveira Freitas
dicionario.keys() // Iterator, idade, nome, sobrenome
dicionario.entries() // Iterator, ['idade', 40], ['nome', 'João'], etc
```

### Semelhanças com o Objeto

Se você conhece as funções de `Object` e [`Reflect`](https://onhernandes.dev/artigos/simplificando-reflect-objetos/), já deve saber que muito do que é realizado com Map também pode ser feito com Object, e isso é verdade.

Apesar de trazer muita coisa inclusa, não é tão diferente de usar o Object. Porém, lembre-se de que um Map mantém a ordem de suas chaves, além de permitir que qualquer coisa seja uma chave.

- [Documentação do Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
