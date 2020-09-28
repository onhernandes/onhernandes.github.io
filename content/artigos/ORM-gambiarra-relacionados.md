---
title: "Série: ORM, gambiarras & relacionados"
date: 2020-09-28T17:21:55-03:00
draft: false
toc: false
images:
  - "/images/word-soup.jpg"
description: "Aquela famosa sopa de letrinhas que sempre esbarramos ao trabalhar com aplicações e bancos de dados. Vamos conhecer melhor sobre, como funcionam, seus padrões e arquiteturas."
tags:
  - orm-gambiarra-relacionados
  - orm
  - odm
  - ogm
  - object
  - data-mapper
  - active-record
---

Bom, essa sopa de letrinhas é muito usada hoje em dia, e por isso eu queria escrever mais a fundo sobre o que são, como funcionam, etc. Algum tempo atrás eu resolvi aprender mais sobre como essas tecnologias funcionam, como são desenvolvidas, etc.

Mas pra não sair por aí usando, primeiro é necessário saber porque e quando usar essas tecnologias.

Em algum momento da sua carreira como pessoa desenvolvedora, você vai esbarrar em uma aplicação que necessite de um banco de dados. 

Existem vários tipos de bancos de dados por aí, alguns são de código aberto, outros privados, alguns são baseados em tabelas, documentos, grafos, são relacionais, não relacionais, e por aí vai. Mas como lidamos com o banco de dados, em uma aplicação? Já que, uma linguagem ou dialeto usado em um banco de dados é completamente diferente do que é usado em código, por exemplo.

Para isso, temos drivers. Isso mesmo. São porções de códigos que resolvem toda a comunicação entre sistemas incompatíveis - como uma API feita em C# e o MySQL, que são totalmente diferentes. Porém, esses drivers focam em fornecer uma camada de compatibilidade entre serviços, uma camada de comunicação, mas não fornecem um padrão ou organização mais robusta do seu código, até porque o foco em si é a comunicação entre serviços, não a forma como se arquiteta a aplicação com o banco de dados.

Aí que os ORMs surgiram.

ORM significa Object Relational Mapping - algo como mapeamento relacional de objetos. E sim, isso tudo segue a orientação a objetos, porque tenta representar os dados em um banco relacional como objetos, ou modelos.

Só para fins de entendimento, também temos: ODM, que significa significa Object Document Mapper, e OGM, que significa Object Graph Mapper. Vamos focar em ORMs aqui.

### O problema

Dependendo do tamanho da sua aplicação, você pode acabar precisando mais do que apenas conectar com o banco e fazer algumas buscas e inserções. Talvez você use muito o banco de dados na sua aplicação. Talvez você resolva implementar alguns Design Patterns seguindo OOP. 

Isso sem contar que, conforme uma aplicação cresce, consequentemente mais pessoas vão trabalhar nela, e com isso, mais gente vai precisar ter um conhecimento prático e aprofundado no banco de dados da aplicação, já que as instruções são feitas quase sempre à mão. Com isso, temos um requisito extra na contratação de pessoas e consultorias: saber bem sobre MySQL, ou o banco de sua aplicação.

Como tirar esse requisito, e deixar o projeto mais fácil de usar? Como remover essa necessidade e risco de se saber sobre o banco de dados na aplicação? Como representar uma entidade no código, como um objeto, sendo que no banco ela é uma linha de uma tabela? 

É aí que os ORMs surgem, fornecendo uma representação prática, do banco de dados e da tabela, no seu código, com foco em facilitar a comunicação e o uso do banco.

### sudo apt install meu-querido-orm

ou, como trabalhar com ORMs.

Ok. ORMs facilitam de alguma forma nosso trabalho com o banco de dados, mas como?

Quanto estamos começando a trabalhar com um ORM, sempre configuramos primeiro, a conexão. Daí, literalmente, cada caso é um caso, já que não há padrão para configurar o acesso, a conexão com seu banco. Logo após essa etapa, precisamos representar nossa tabela ou coleção, no código. 

Como fazemos isso? Criando entidades pelo seu ORM - normalmente chamadas também de modelo (Model). São classes (na sua maioria das vezes, serão classes mesmo) que representam sua tabela no banco de dados. Nessas entidades, ou classes, definimos quais suas propriedades. Quais colunas nossa tabela tem/vai ter, quais índices teremos, por aí vai.

A partir dessas classes, conseguimos se relacionar com linhas, documentos, tabelas ou coleções, etc.

Uma coisa que você vai perceber em alguns ORMs é que, as entidades podem possuir ou não um estado de persistência no banco. Ou seja, em alguns ORMs, uma instância da sua classe pode representar diretamente o dado que está no banco de dados, a linha, por exemplo, e então realizar operações em cima dela - como atualizar uma propriedade ou apaga-la.

Em alguns ORMs, usamos os métodos de uma entidade tanto para realizar operações a nível de tabela, como pesquisar, quanto a nível de linha, atualizando um campo ou realizando alguma ação do tipo. Nesses casos, tanto a representação da entidade quanto a comunicação com o banco de dados ficam na mesma classe. 

Essa abordagem, chamamos de ActiveRecord, onde cada instância da classe representa a linha no banco de dados e ao mesmo tempo, a classe representa toda a tabela, com seus próprios métodos e lógica inclusos.

Além disso, claro, existem outra abordagens, uma delas que também é muito conhecida se chama Data Mapper, mas hoje vamos falar de ActiveRecord.

### Active Record

Um exemplo bem simples da implementação de um ActiveRecord, é com o [Sequelize](sequelize.org) para JS. 

Estamos trabalhando com uma tabela de usuários, no MySQL. Para declarar um novo modelo, ou seja, uma entidade que represente nossa tabela de usuários no nosso código, usamos o método define():

```jsx
const Sequelize = require('sequelize')
const instance = new Sequelize(/* ... */)

const columns = {
	name: {
		type: Sequelize.STRING,
		allowNull: true
	},
	email: {
		type: Sequelize.STRING,
		allowNull: false
	}
}

const options = {
	freezeTableName: true,
	tableName: 'app_users',
	version: true,
	paranoid: true
}

instance.define('User', columns, options)

module.exports = instance
```

Com o código acima, conseguimos definir as colunas da nossa tabela, inclusive configurar exatamente quais os tipos e definições de cada coluna, e então configuramos o nome da tabela para `app_users`.

Vale comentar que essa é uma das sintaxes disponíveis do Sequelize para criar um novo modelo, você pode ver mais [na documentação](https://sequelize.org/master/manual/model-basics.html).

E agora, como usamos esse modelo na prática?

```jsx
const instance = require(/* ... */)
const User = instance.model('User')

const user = new User(/* data */)
await user.save()

console.log(user) // dataValues: id, name, email, etc
```

A variável `user`, instância do nosso Modelo, é uma representação da nossa entidade e ao mesmo tempo, do registro exato no banco de dados, possuindo métodos como `save()` para persistir as informações que forem alteradas.

Essa implementação é bem comum em várias linguagens, como em Ruby com ActiveRecord, Nodejs com o Sequelize, e por aí vai.

Através das instâncias da classe, fazemos nossas operações em cima de cada unidade, cada usuário registrado. Se quisermos trabalhar com a tabela toda, podemos usar os métodos diretamente na classe:

```jsx
const instance = require(/* ... */)
const User = instance.model('User')

User.findAll() // procura vários itens no banco, retorna uma lista de instâncias de User
User.findOne() // procura um único usuário e retorna uma instância de User
User.destroy() // remove um ou vários usuários
User.create() // insere um novo usuário no banco, retorna uma instância de User
```

Com isso, fechamos o primeiro artigo sobre ORMs e o uso de banco de dados em aplicações.

Referências e indicações:

- [https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one#1279678](https://stackoverflow.com/questions/1279613/what-is-an-orm-how-does-it-work-and-how-should-i-use-one#1279678)
- [https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb](https://medium.com/oceanize-geeks/the-active-record-and-data-mappers-of-orm-pattern-eefb8262b7bb)
- [https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/](https://www.thoughtfulcode.com/orm-active-record-vs-data-mapper/)
- [https://www.yegor256.com/2014/12/01/orm-offensive-anti-pattern.html](https://www.yegor256.com/2014/12/01/orm-offensive-anti-pattern.html)
- [http://hamidmosalla.com/2018/11/25/stop-using-repository-pattern-with-an-orm/](http://hamidmosalla.com/2018/11/25/stop-using-repository-pattern-with-an-orm/)
- [https://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/](https://blog.codinghorror.com/object-relational-mapping-is-the-vietnam-of-computer-science/)
