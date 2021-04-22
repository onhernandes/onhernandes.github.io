---
title: "Como saber se uma propriedade existe em um objeto?"
date: 2021-04-22T19:43:39-03:00
thumbnail: "como-acessar-propriedade-em-objetos.jpg"
thumbnailAlt: "Já parou para pensar, qual a melhor forma de verificar se o objeto possui uma chave com JS?"
description: "Existem diversas formas para saber se um objeto possui uma chave. Mas qual será a mehor?"
images:
 - "/images/zines/como-acessar-propriedade-em-objetos.jpg"
tag:
- objetos
- reflect
- chave
# zine: "como-acessar-objetos"
---

## objeto.hasOwnProperty(chave) ⇒ true ou false

Objetos em JS possuem o método hasOwnProperty(chave), que aceita uma chave como parâmetro, retornando true ou false. Porém, apenas verifica propriedades da sua instância, não verificando campos herdados, por exemplo.

```jsx
const pessoa = {
  nome: null
}

pessoa.toString // function toString()
pessoa.hasOwnProperty('nome') // true
pessoa.hasOwnProperty('toString') // false
```

Ah, e se o objeto for um array, ele também verifica o índice.

Além disso, o método pode ser sobreescrito de diversas formas não previstas:

```jsx
req.body = { hasOwnProperty: null }

req.body.hasOwnProperty('nome')
// TypeError req.body.hasOwnProperty is not a function
```

## Reflect.has(objeto, chave) ⇒ true ou false

Esse método estático verifica se o objeto passado como parâmetro possui a determinada chave - incluindo propriedades herdadas -, retornando true ou false

```jsx
const pessoa = {
  nome: null
}

Reflect.has(pessoa, 'nome') // true
Reflect.has(pessoa, 'toString') // true
```

## 'chave' in objeto

Assim como o Reflect.has(), o operador in verifica se a propriedade existe no objeto!

```jsx
const pessoa = {
  nome: null
}

'nome' in pessoa // true
'toString' in pessoa // true
```

Qual a melhor? Você decide. Eu gosto de usar `Reflect.has()` e `in`.

Recomendações:
- [Object.prototype.hasOwnProperty()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty)
- [Reflect.has()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has)
- [operador in](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/in)
