---
title: "Conhecendo Sets Em JS"
date: 2020-10-06T19:07:07-03:00
draft: false
toc: false
images:
 - "/images/shopping.jpg"
tags:
  - javascript
  - array
  - sets
  - lista
  - boas praticas
  - tipos de dados
  - nodejs
description: "Já conhece a nova forma de trabalhar com arrays em JavaScript? Vem conferir! Simplifique seu código e torne-o mais organizado!"
---

Esse é mais um daqueles artigos bem práticos sobre JS. Dessa vez, vamos falar de Sets, uma (nem tão nova assim) nova funcionalidade/objeto em JS!

Imagine que você está recebendo uma série de nomes, precisa juntá-los em uma lista, um array. Como você faria?

Talvez, algo como simplesmente usar o `.push()`do JS, para ir adicionando os nomes à sua variável. 

```jsx
const nomes = []
nomes.push('Rafael Braga')
```

Mas agora, você precisa que essa lista possua apenas uma ocorrência de cada item, ou seja, essa lista não pode ter os nomes duplicados. E agora? Talvez algo como...

```jsx
const nomes = []

if (nomes.indexOf('Rafael Braga') === -1) {
  nomes.push('Rafael Braga')
}
```

Funciona super bem. Ok, temos 2 linhas a mais, por causa da condicional, mas o importante é que funciona.

Agora, faça o mesmo, mas com objetos. Opa! Aí complica.

```jsx
const compras = []

const compraAtual = { titulo: 'Pinho Sol' }
// agora o que?
```

E se você estiver trabalhando com listas dentro de outra lista?

Código cresce, fica difícil de entender, pode quebrar com mais facilidade pra uma tarefa que não deveria ser tão difícil e dolorosa. É aí que chegam os..

## Sets

Sets são uma (nem tão) nova funcionalidade do JavaScript, onde conseguimos criar estruturas semelhantes a um array ou lista. A grande diferença é que o Set garante a unicidade de **valores**, ou seja, a classe garante para nós que nunca haverá dois valores iguais.

Sabe o que é melhor? Você pode colocar strings, números, objetos, outros arrays e até funções!

```jsx
const compras = new Set()

const compraAtual = { titulo: 'Pinho Sol' }

compras.add(compraAtual) // Set [ { titulo: 'Pinho Sol' } }
compras.add(compraAtual) // Set [ { titulo: 'Pinho Sol' } }
compras.add(1) // Set [ { titulo: 'Pinho Sol' }, 1 }
```

Com o Set, conseguimos criar uma estrutura muito semelhante ao nosso array, porém mantendo desde o começo, seus valores de forma única. 

No lugar de `.push()` usamos o `.add()`.  Quer saber se um valor existe? Toda instância de Set possui o método `.has()`, onde você passa como primeiro parâmetro o valor que deseja verificar, ele te retorna um boolean.

Quer saber o tamanho do Set? Use a propriedade `.size`

Precisa iterar? A instância de Set possui os métoso `.keys()` para retornar as chaves, `.values()` para retornar os valores e `.entries()` para retornar `[valor, valor]`. É bem semelhante ao [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) - falaremos dele mais pra frente.

Você pode usar tranquilamente a sintaxe `for (let item of meuSet) {}` também.

### Nem tudo são flores

Apesar de ser semelhante a um array, vale ressaltar que o Set não é uma implementação de Array, logo, não possui todos os mecanismos que um Array possui.

Sem contar que, há uma diferença entre adicionar um item ao seu Set por referência ou diretamente:

```jsx
const compras = new Set()

const compraAtual = { titulo: 'Pinho Sol' }

compras.add(compraAtual) // Set [ { titulo: 'Pinho Sol' } }
compras.add({ titulo: 'Pinho Sol' }) // Set [ { titulo: 'Pinho Sol' }, { titulo: 'Pinho Sol' } }
```

Bom, nem tudo é uma bala de prata para todos os problemas né? Mas é bom conhecer para usar quando realmente precisar.

Recomendo fortemente que você leia a [documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) para saber melhor sobre como usar, implementações, etc.
