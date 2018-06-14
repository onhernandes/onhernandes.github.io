---
title: 'Terminais são legais v3.0: usuários'
description: 
thumbnail:
tags:
---

![]()

Só para te contextualizar, esse artigo é uma continuação de uma série sobre terminal/shell, se quiser ver outros artigos, aqui estão:

- [Terminais são legais: como começar a usar ](/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/terminais-sao-legais-v2-pastas/)

# Como usuários funcionam?

E agora vamos abordar sobre usuários(criar, alterar, apagar, etc), no próximo, sobre grupos e por fim permissões.

Como você já deve ter visto, no Linux nós temos *usuários* e *grupos de usuários*. Quando você instalou sua distribuição, você precisou definir o nome de um usuário, que é o mesmo usado no login, também o mesmo que aparece no seu terminal.

Por padrão, quando instalamos o Linux, temos além do nosso usuário, o *root*, que nada mais é que o usuário administrador do sistema, com permissão para fazer tudo o que quiser, mexer onde quiser sem restrições.

A senha do usuário *root* é definida na instalação do sistema e eu sempre costumo colocar a mesma senha do meu usuário. Isso é uma má prática e deve ser evitada, mas sou preguiçoso para isso =|

Vamos trabalhar com os seguintes comandos:

- `useradd` para adicionar um novo usuário
- `passwd` para definir uma senha ao novo usuário
- `userdel` para apagar um usuário
- `usermod` para alterar um usuário
