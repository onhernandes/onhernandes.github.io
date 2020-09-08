---
title: "Simplificando: Reflect em objetos"
date: 2020-09-08T17:21:28-03:00
draft: false
toc: false
images:
description: "Você já parou pra pensar se dá pra facilitar aquelas validações de objetos? Já conheceu o Reflect?"
tags:
  - design-de-codigo
  - nodejs
  - javascript
---

Para quem já se aventurou com tipos em JavaScript e também com algumas validações, sabe que usar uma simples

```jsx
if (user) { /* ... */ }
if (!user) { /* ... */ }
```

Pode ser um tanto... complicado. Porque você pode cair em alguns falso-positivos, ou às vezes você deixa o código confuso porque os valores podem ser `true, false, undefined`, e você só queria saber se o objeto possui ou não um campo, ou obtê-lo de certa forma.

Estudando um pouco a documentação do protótipo `Object`, vemos que uma instância de um objeto possui o método `hasOwnProperty()`, através dele verificamos se o objeto possui a propriedade passada como primeiro parâmetro, retornando `true/false`.  

```jsx
if (user.hasOwnProperty('name')) { /* ... */ }
```

Porém, tratando isso com objetos literais em JavaScript, como o corpo de uma requisição na API, pode deixar alguma brecha de segurança, ou só uma forma de lesar sua API.

Por exemplo, eu posso definir essa propriedade em uma requisição:

```jsx
// Request body
// { name: '', hasOwnProperty: '' }
if (req.body.hasOwnProperty('name')) { /* ... */ }
```

E nossa aplicação simplesmenta não vai funcionar, um erro será emitido porque a propriedade `hasOwnProperty` não é uma função, e sim uma `string`. Isso é possível em qualquer situação onde obtemos um objeto desconhecido.

Uma forma bem comum de evitar isso, é usar o método diretamente do protótipo:

```jsx
// Request body
// { name: '', hasOwnProperty: '' }
if (Object.prototype..hasOwnProperty.apply(req.body, ['name'])) { /* ... */ }
```

Porém, temos que admitir que o código pode ficar grande e... feio, difícil de ler até. Para resolver isso, temos também o protótipo `Reflect`

### Usando Reflect no lugar de Object.xyz

O `Reflect` é um objeto que nos fornece funções para interceptar objetos em JavaScript. Por exemplo, para saber se um objeto possui uma certa propriedade, usamos:

```jsx
// Request body
// { name: '', hasOwnProperty: '' }
if (Reflect.has(req.body, 'name')) { /* ... */ }
```

Teremos um valor `boolean` indicando se existe ou não.

Além disso temos a função `Reflect.get(<name>)`, que retorna o valor de uma determinada propriedade, e o `Reflect.set(<name>, <value>)` para definir o valor de uma propriedade. 

Há outras funções como `Reflect.ownKeys()`.

A [documentação MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) tem uma vasta referência sobre o uso do Reflect muito boa, fica como minha indicação.
