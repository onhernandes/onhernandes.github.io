---
title: 'Terminais são legais v3.1: grupos de usuários'
description:
thumbnail:
tags:
---

![]()

Nos artigos anteriores, vimos um pouco sobre:

- [Terminais são legais: como começar a usar ](/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/terminais-sao-legais-v2-pastas/)
- [Terminais são legais v3.0: usuários](/terminais-sao-legais-v3-usuarios/)

# Grupos de Usuários

Agora vamos trabalhar com *grupos de usuários*, como o próprio nome já diz, você pode agrupar usuários e definir permissões baseadas em grupos.

Comandos do dia:

- `groupadd`
- `groupmod`
- `groupdel`
- `groups`
- `groupmems`

## Criando um grupo de usuários

É bem simples, basta executar `sudo groupadd <nome-do-grupo`. Em seguida você vai precisar colocar a senha do grupo(sim, grupos tem senha!), assim como fez para criar um novo usuário.

Caso queira listar os grupos e saber se o seu foi criado, pode olhar o arquivo `/etc/group`. 

Para ver os grupos atuais, pode usar o comando `groups`, você também pode executar `groups <nome-do-usuario>` para saber em quais grupos um usuário está.

## Adicionando usuários ao novo grupo

Ok, agora temos um grupo de usuários, mas ele está vazio. Precisamos adicionar usuário a ele, certo?

Lembra do `usermod`? Então, aqui também usamos ele, mas dessa vez com o parâmetro `-G` ou `--groups` seguido pelo nome do nosso novo grupo. Exemplo: `sudo usermod -G <nome-do-grupo> <nome-do-usuario>`.

Para verificar, use `groups <nome-do-usuario>`.

Com isso, você pode gerenciar os grupos de qualquer usuário.

Há também o comando `groupmems`, que serve para gerenciar os membros do grupo primário de um usuário, dizendo melhor, o grupo principal.

Se você quiser adicionar seu usuário ao grupo `root`, pode executar `sudo groupmems -a <nome-do-usuario>`.

O `groupmems` é bom por ser versátil e mais fácil de usar para adicionar usuários. Você pode usar o seguinte comando como exemplo para adicionar um usuário a outros grupos: `sudo groupmems -g <nome-do-grupo> -a <nome-do-usuario>`

## Modificando e apagando grupos de usuários

Você pode alterar o nome do grupo com `sudo groupmod -n <novo-nome> <nome-do-grupo>`. Os parâmetros `-n` e `--new-name` são equivalentes.

Também pode alterar a senha de um grupo usando o parâmetro `-p` ou `--password` seguido da nova senha.

Para apagar um grupo de usuário, pode usar o comando `groupdel`.
