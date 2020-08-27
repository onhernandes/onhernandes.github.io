---
title: "Configuracoes em NodeJS: Um guia para o estado da arte"
date: 2020-08-27T11:12:04-03:00
draft: false
toc: false
tags:
  - nodejs
  - infra
description: "Já pensou em configurar váriaveis de ambiente em projetos com NodeJS? Se liga nas melhores formas de se organizar."
---

Acredito que em algum momento da sua vida, toda pessoa desenvolvedora já teve que lidar com configurações sensíveis e secretas, bem como dados de acesso a serviços e bancos de dados, tokens de autenticação e etc. E já deve ter visto várias maneiras diferentes, únicas, revolucionárias ou só desleixadas de fazer isso. Se até hoje você não teve essa experiência, tudo bem, um dia chegará. Vai ser melhor ainda você continuar lendo isso aqui pra saber mais.

## Problema

Bom, precisamos começar de algum lugar, né? Nunca devemos implementar uma tecnologia nova a menos que a mesma esteja solucionando algum problema, ou pelo menos, facilitando a convivência com esse problema.

Vamos seguir: temos uma API que basicamente, recebe URLs de vídeos de música no YouTube, salva essas músicas em uma tabela e posteriormente tenta processar essas músicas, ou seja, tenta baixá-las e alterar seus metadados. Esse não é um projeto fictício, na verdade eu o escrevi há muito tempo, se chama [Sounder](https://github.com/onhernandes/sounder/). E enquanto estou escrevendo esse artigo, também estou tentando reescrever essa API completamente - pelo mesmo motivo que a criei, para estudo e prática.

Com essa API, temos os dados de acesso para o banco de dados (pode ser uma URI, ou os dados bem separados), que são dados sigilosos, não podemos permitir que qualquer pessoa os consiga. Esses dados mudam quando estamos com a API em produção, quando estamos testando a API em qualquer servidor e também quando estamos trabalhando no nosso computador.

A partir desse cenário, como podemos configurar a API para acessar o banco? Como gerenciar e organizar as informações sigilosas? Adiante vou mostrar algumas formas que eu já trabalhei, o que eu gostei ou não, e outras mais. 

### Variáveis de ambiente diretamente no código

Bom, parece uma boa ideia, certo? É só usar a variável ~ mágica ~ `process.env` e pegar os dados a partir de variáveis de ambiente e pronto! 

Dados são passados entre qualquer ambiente e nossa API. Conseguimos usar isso com Docker, Kubernetes, um servidor comum sem gerenciamento, no nosso computador, em um servidor de testes ou de homologação. 

Mas qual o problema? 

Bom, inicialmente parece ser tranquilo, temos apenas uma variável de ambiente necessária contendo apenas a URI de acesso. Ao mesmo tempo, é um impedimento, já que temos que fornecer uma URI e não os dados separados como host, usuário, senha, porta, etc. Sem contar que, conforme nossa aplicação cresce, mais e mais vamos ter que usar e memorizar os nomes das variáveis. Ou documentar isso em algum lugar. Tudo se resume usando aquela palavrinha mágica: a aplicação não *escala*. Vamos usar variáveis de ambiente com condicionais (muitas vezes, ternárias) para usar valores do ambiente com alguma definição padrão. 

### config.js

Esse aqui foi o clássico, e o mais comum que já trabalhei. Consiste basicamente de um arquivo em JavaScript exportando um objeto com chave e valor:

```jsx
module.exports = {
  mysql: {
    database: '',
    host: '',
    username: '',
    password: ''
  }
}
```

E se você quiser trabalhar com vários ambientes...

Pode exportar um objeto pra cada ambiente:

```jsx
const defaultConfig = {
  mysql: {
    database: '',
    host: '',
    username: '',
    password: ''
  }
}

const prodConfig = {
  mysql: {
    database: '',
    host: '',
    username: '',
    password: ''
  }
}

module.exports = { prodConfig, defaultConfig }
```

Mas aí fica ruim ter que acessar objeto por objeto né? Não seja por isso:

```jsx
const currentEnv = (process.env.NODE_ENV || 'DEV').toLowerCase()

const defaultConfig = {
  mysql: {
    database: '',
    host: '',
    username: '',
    password: ''
  }
}

const prodConfig = {
  mysql: {
    database: '',
    host: '',
    username: '',
    password: ''
  }
}

const envs = {
 production: prodConfig,
 dev: defaultConfig
}

module.exports = envs[currentEnv]
```

Ah, quer usar variáveis de ambiente também? Só fazer alguma mágina com `database: process.env.MYSQL_DATABASE || '<banco padrão>'` e pronto! Mas aí fica meio chato que tu precisa repetir as configurações em todo ambiente, né? Pode aproveitar e criar um objeto padrão e usar o `Object.assign()` pra ajudar a resolver isso. Ainda assim, eu... tenho certa preguiça de desenvolver esse tipo de coisa, porque acredito ser um trabalho facilmente adaptado e padronizado de outra forma. E vamos de...

### A biblioteca config

Essa é uma das minhas favoritas porque é bem fácil de mexer. Dá uma olhadinha na [página do NPM](https://www.npmjs.com/package/config). Você precisa instalar no seu projeto, e para usar, basta criar uma pasta `config/` na raiz do seu projeto. Crie um arquivo `default.json`, sim, é literalmente as configurações padrões do projeto. Então, ele ficaria:

```jsx
{
  "mysql": {
    "host": "",
    "database": "",
    "username": "",
    "password": ""
  }
}
```

Quer criar um arquivo de produção? Só criar `config/production.json`, e colocar as configurações que acha necessário. Não precisa colocar tudo, porque a biblioteca usa o `default.json` como padrão e pega as informações de lá. O controle de qual arquivo usar é feito pelo `NODE_ENV` mesmo. E como você usa no código? É mais simples:

```jsx
const config = require('config')
const Sequelize = require('sequelize')

module.exports = new Sequelize(
  config.get('mysql.database'),
  config.get('mysql.username'),
  config.get('mysql.password'),
  { host: config.get('mysql.host'), dialect: 'mysql' }
)
```

Acho bem tranquilo de trabalhar. Ah, quer usar variáveis de ambiente? Você pode criar um arquivo chamado `config/custom-environment-variables.json` seguindo suas configurações, e no valor você usa o nome da variável de ambiente que quer usar.

```jsx
{
  "mysql": {
    "host": "MYSQL_HOST"
  }
}
```

Eu particularmente gosto de ter essa separação porque nem tudo que está nas configurações deveria ser alterado por variáveis de ambientes. Pra mim, isso deixa as configurações mais expressivas e fáceis de entender, é mais tranquilo pra compreender o que está mudando por fatores externos.

Outra forma de alterar os valores é fornecendo em formato JSON através da variável `NODE_CONFIG='{"mysql":{"host":"127.0.0.1"}}`

### E por último, o dotenv

Esse eu já usei bastante, mas com Python, em outro pacote. Com Node, é bem parecido, basta criar um arquivo chamado `env-example` na raiz do seu projeto para servir como exemplo (não é necessário mas é o que mais vejo ao usarem esses arquivos env), quando precisar usá-lo, copie para `.env`. Seguindo o que vi sendo utilizado em outros projetos, o arquivo `.env` deve ser ignorado pelo Git.

Nesse arquivo, você coloca as variáveis de ambiente, linha por linha, seguindo o padrão `CHAVE=VALOR`:

```jsx
MYSQL_HOST=127.0.0.1
MYSQL_DATABASE=database
MYSQL_USERNAME=root
MYSQL_PASSWORD=123456
```

Para acessar essas informações, você tem que primeiro iniciar o pacote dotenv no seu projeto, isso pode ser feito de duas formas. A primeira é chamando a biblioteca no ponto de entrada da sua aplicação (`index.js` por exemplo):

```jsx
require('dotenv').config()
```

A outra opção é usar um parâmetro na hora de executar seu projeto pelo terminal com Node:

```jsx
node -r dotenv/config your_script.js
```

Depois de iniciar o dotenv, você consegue acessar as informações pelo `process.env` tranquilamente.

E com isso termino minhas indicações e comentários sobre as formas de gerenciar segredos e configurações de aplicações com NodeJS. Vou deixar abaixo uma lista de referências e outros conteúdos para você dar uma olhada também.

### Referências

- [https://github.com/etcd-io/etcd](https://github.com/etcd-io/etcd)
- [https://12factor.net/](https://12factor.net/)
- [https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html](https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html)
- [https://stackoverflow.com/questions/8332333/node-js-setting-up-environment-specific-configs-to-be-used-with-everyauth#8355493](https://stackoverflow.com/questions/8332333/node-js-setting-up-environment-specific-configs-to-be-used-with-everyauth#8355493)
- [https://codeburst.io/node-js-best-practices-smarter-ways-to-manage-config-files-and-variables-893eef56cbef](https://codeburst.io/node-js-best-practices-smarter-ways-to-manage-config-files-and-variables-893eef56cbef)
- [https://stackoverflow.com/questions/33557425/where-should-i-store-secret-strings-on-node-server](https://stackoverflow.com/questions/33557425/where-should-i-store-secret-strings-on-node-server)
- [https://medium.com/dubizzletechblog/managing-environment-variables-in-nodejs-and-modern-js-apps-608003f4686c](https://medium.com/dubizzletechblog/managing-environment-variables-in-nodejs-and-modern-js-apps-608003f4686c)
- [https://secrethub.io/docs/guides/nodejs/#write-secrets](https://secrethub.io/docs/guides/nodejs/#write-secrets)
- [https://itnext.io/node-js-configuration-and-secrets-management-acd84375ca7](https://itnext.io/node-js-configuration-and-secrets-management-acd84375ca7)
