---
title: "Quando você não tem tempo para fazer um fork"
date: 2023-03-16T14:42:44-03:00
draft: false
description: "Como fazer um pequeno ajuste a uma biblioteca e corrigir problemas sem precisar de um fork"
photo_by: "Photo by Nubia Navarro (nubikini): https://www.pexels.com/photo/yellow-van-die-cast-386025/"
tags:
 - fork
 - git
 - github
 - gitlab
 - patch-package
 - patch
 - ajustes
 - lib
 - biblioteca
cover: "pexels-nubia-navarro-nubikini-386025.jpg"
# for metatag :image, must be full path
images:
  - "/img/pexels-nubia-navarro-nubikini-386025.jpg"
---

### Introdução
Recentemente comecei a mexer com [react native](reacnative.org) para praticar um pouco mais de React e começar a mexer com aplicações mobile. Na hora de instalar o SQLite, configurei o TypeORM corretamente mas comecei a pegar um aviso bem peculiar

> warn Package react-native-sqlite-storage contains invalid configuration: "dependency.platforms.ios.project" is not allowed. Please verify it's properly linked using "react-native config" command and contact the package maintainers about this

Resumidamente, tinha alguma configuração inválida do pacote. Era coisa de duas linhas, o pacote funcionava muito bem, mas só precisava arrumar isso. E agora, onde eu mexo?

Ou faço um fork, ou alguma gambiarra... e se eu pudesse fazer um patch sem necessariamente fazer um fork, criar issue, etc?

### patch-package

Exatamente como o próprio nome da lib já diz, o pacote patch-package foi feito para esses pequenos ajustes, esses momentos que você consegue resolver o problema com um pequeno _patch_, sem todo aquele esforço de criar uma issue, documentar, fazer um fork, etc. Às vezes, usar optional-chaining resolve o problema na biblioteca desejada.

`patch-package` é um pacote que cuida de fazer o gerenciamento de pequenos _patches_ ou ajustes à outras bibliotecas manualmente.

Sim, soa como algo que não se deva fazer, mas na prática chega até ser uma boa ideia. Ajuda também quando não se tem certeza se o problema está no pacote, ou no seu código.

Depois de utilizado, confirmado que o erro está na biblioteca e até como consertar, você pode usar uma flag `--create-issue` que ele te ajuda a criar uma issue nova sobre!

#### Como utilizar

Depois de identificado o problema, como no meu caso, eu precisava remover 2 linhas de um arquivo `react-native.config.js`, você pode editar o pacote diretamente na pasta `node_modules`. Feito as mudanças, execute

```sh
npx patch-package nome-do-pacote
```

e pronto! Seu ajuste foi aplicado, a biblioteca agora foi copiada junto com suas alterações para uma pasta `./patches` onde o Node vai chamar a biblioteca.

Você pode ler mais sobre diretamente [na página do Github](https://github.com/ds300/patch-package#readme)

### Possíveis imprevistos

Como comentei antes, eu estava trabalhando em um projeto react-native. Para o ajuste com código funcionou perfeitamente, mas quando tentei atualizar só a versão de algumas subdependências no arquivo `package.json`, o comando `patch-package` não detectou alterações e não aplicou corretamente o ajuste, então acredito que há alguns casos pequenos em que o fork realmente é necessário.


## Conclusão

A biblioteca `patch-package` é muito útil no dia a dia, e sabendo usar com cuidado, é possível contribuir muito para o open-source de uma forma mais prática e objetiva, assim como também ajudar a validar e testar seu próprio código.
