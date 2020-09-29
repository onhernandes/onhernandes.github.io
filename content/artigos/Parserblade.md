---
title: "Parserblade"
date: 2020-09-29T10:44:34-03:00
draft: false
toc: false
images:
 - "/images/work-journal.jpg"
description: "Trabalhar com XML, CSV ou YAML com NodeJS pode ser chato. E difícil se você estiver tentando trabalhar com arquivos grandes. E se tivesse uma biblioteca que resolvesse tudo? Agora tem!"
tags:
  - parserblade
  - js
  - nodejs
  - csv
  - xml
  - yaml
  - json
  - stream
  - data
  - npm
  - parser
---

Esse de longe é um dos projetos que eu mais gostei de criar. Mas, pra que? 

Bom, se você já tentou trabalhar com planilhas em nodejs, já deve ter visto várias opções na internet. E todas funcionam de uma forma diferente, com parâmetros diferentes, pra fazer quase a mesma coisa.

Seria tão simples se você pudesse trabalhar com esses dados assim como você faz em JSON: um simples `JSON.stringify()` ou `JSON.parse()`, né?

E foi assim que eu criei o [parserblade](https://github.com/onhernandes/parserblade) -  uma biblioteca para você trabalhar com CSV, XML, YAML e até JSON de uma forma simples.

Sem ter que ficar procurando e testando várias bibliotecas para uma tarefa razoavelmente simples. Tão simples quanto usar `JSON.stringify()` ou `JSON.parse()`.

Você pode instalar com um simples `npm install parserblade`. Todos os formatos são exportados pelo seu nome diretamente.

```jsx
const { csv } = require('parserblade')

csv.parse() 
csv.stringify()
```

Temos uma documentação mais extensa em [https://onhernandes.github.io/parserblade](https://onhernandes.github.io/parserblade)

Se encontrar algum bug ou problema, tem alguma ideia ótima, não hesite em [abrir uma issue](https://github.com/onhernandes/parserblade/issues).

Ainda estamos implementando mais coisas, então logo teremos...

- Validação de dados
- Suporte a Streams
- Acesso a arquivos (ler de/escrever em, com opções de async/sync/stream)
- CLI

Também estamos estudando possíveis integrações com outros serviços e bibliotecas, como:

- Express
- Koa
- Mongoose
- Sequelize
- Google Drive
- Google Cloud Storage
- Dropbox
- Mega
- AWS

Me siga no [Twitter](http://twitter.com/onhernandes) para ficar ligado em mais atualizações!
