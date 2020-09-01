---
title: "Simplificando casos e condicionais com objetos"
date: 2020-08-31T11:12:04-03:00
draft: false
toc: false
tags:
  - nodejs
  - design-de-codigo
description: "Todo mundo já teve que mexer com várias condicionais, uma atrás da outra. Switch? Nah, melhor não. E que tal objetos para simplificar?"
---

Todo mundo já teve que trabalhar condicionais em programação. Exceto as pessoas que usam linguagens que não possuem condicionais, é claro. 

Tem casos onde precisamos adicionar várias condicionais diferentes, com retornos e funções diferentes. As vezes são poucas, as vezes, muitas. 

Para tentar deixar de exemplo:

```jsx
app.put('/api/users/:id', async (req, res) => {
	const user = req.user
	
	switch (user.type) {
		case 'admin':
			// break;
		case 'editor':
			// break;
		case 'user':
			// break;
	}
})
```

Ou, com vários `if`s:

```jsx
app.put('/api/users/:id', async (req, res) => {
	const user = req.user

	if (user.type === 'admin') {
		// code...
	}

	if (user.type === 'editor') {
		// code...
	}

	if (user.type === 'user') {
		// code...
	}
})
```

Como você resolveria essa situação? Outra forma muito interessante que gosto de usar, são objetos

```jsx
app.put('/api/users/:id', async (req, res) => {
	const user = req.user
	const userTypes = {
		admin: () => {/* ... */},
		editor: () => {/* ... */},
		user: () => {/* ... */}
	}

	if (Reflect.has(userTypes, user.type) === false) {
		// default code
	}

	await userTypes[user.type]()
})
```

Essa é uma das melhores forma de organizar condicionais e casos específicos de uma forma diferente, e na minha opinião, mais simples.

Não é uma bala de prata e para verificações mais complexas, vale tentar usar uma lista também. 

Outra alternativa aos objetos, são [Maps](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Map) que funcionam de uma forma semelhante à objetos, mas garantem a ordem das chaves, e também que cada chave sempre será única - o melhor, é que cada chave pode ser uma string, número, array, objeto, função, qualquer coisa pode ser uma chave!

Parece bem simples mas já me ajudou muito, principalmente a simplificar algumas porções de código
