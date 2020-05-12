---
layout: draf
title: 'Terminais são legais v3.0: usuários'
description: >-
  Já pensou em criar e gerenciar usuários pelo terminal? É muito fácil e
  simples!
thumbnail: people.jpg
date: 2018-06-18 09:41:47
---


![](/images/Terminais-sao-legais-v3-usuarios/people.jpg)

Só para te contextualizar, esse artigo é uma continuação de uma série sobre terminal/shell, se quiser ver outros artigos, aqui estão:

- [Terminais são legais: como começar a usar ](/artigos/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/artigos/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/artigos/terminais-sao-legais-v2-pastas/)

# Como usuários funcionam?

E agora vamos abordar sobre usuários(criar, alterar, apagar, etc), no próximo, sobre grupos e por fim permissões.

Como você já deve ter visto, no Linux nós temos *usuários* e *grupos de usuários*. Quando você instalou sua distribuição, você precisou definir o nome de um usuário, que é o mesmo usado no login, também o mesmo que aparece no seu terminal.

Por padrão, quando instalamos o Linux, temos além do nosso usuário, o *root*, que nada mais é que o usuário administrador do sistema, com permissão para fazer tudo o que quiser, mexer onde quiser sem restrições.

A senha do usuário *root* é definida na instalação do sistema e eu sempre costumo colocar a mesma senha do meu usuário. Isso é uma má prática e deve ser evitada, mas sou preguiçoso para isso =|

Vamos trabalhar com os seguintes comandos:

- `useradd` para adicionar um novo usuário
- `usermod` para alterar um usuário
- `passwd` para definir uma senha ao novo usuário
- `userdel` para apagar um usuário

## Criando um usuário

Esse comando altera usuários, então não é qualquer um que pode executar, senão poderia deixar o sistema vulnerável. Para ações mais restritas, o Linux tem uma conta de administrador por padrão, chamada *root*. É uma conta com acesso total à qualquer lugar do sistema, pode alterar o que quiser e como quiser.

Normalmente, quando você instala o Linux, a senha do usuário *root* é a mesma que você colocou para o seu usuário, a menos que tenha alterado isso propositalmente. Para executar comandos como *root*, você precisa colocar `sudo` no começo do comando. Quando usar, o terminal irá pedir a senha do usuário *root*, para confirmação, em seguida prosseguirá com o fluxo.

Para criar um novo usuário, você pode usar o comando `useradd` da seguinte forma: `sudo useradd -m <nome-do-usuario>`, o terminal irá pedir a senha do usuário *root*, em seguida você vai precisar inserir a senha do usuário que está sendo criado.

O parâmetro `-m` é o mesmo que `--create-home`, ele cria a pasta do usuário.

## Testando o novo usuário

Para saber se o usuário foi criado corretamente, temos duas formas: verificando o arquivo `/etc/passwd` ou fazendo log in como o novo usuário.

O arquivo `/etc/passwd` possui uma listagem dos usuários do sistema basicamente. Ele é um arquivo de texto, então [você pode ler seu conteúdo como faria com qualquer outro arquivo](/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/), como por exemplo, usando `cat /etc/passwd`. Se ficou muita coisa, pode combinar com o `grep`: `cat /etc/passwd | grep <nome-do-usuario>`.

Para fazer o log in como o novo usuário, você nem precisa sair da sua conta, basta execuar `su - <nome-do-usuario>`, o terminal irá pedir a senha para aquele usuário e em seguida você estará conectado como seu novo usuário.

Saia usando o comando `exit`, ele irá fazer o log off do usuário e retornará para onde estava.

## Modificando um usuário

Como vamos modificar os dados de usuário, precisamos sempre usar o `sudo` no começo de cada comando.

Digamos que agora você quer alterar algumas coisas do usuário que criou, como a pasta, nome de login, ou mudar sua senha. Você pode usar o `usermod` para alterar os dados e `passwd` para alterar a senha.

Usuários podem ser bloqueados no Linux, para isso existe o parâmetro `-L`, ou `--lock`: `sudo -L <nome-do-usuario>`. Se quiser desbloquear, pode fazer usando `-U` ou `--unlock`.

Quer mudar o nome de login? Existe o parâmetro `-l` ou `--login` seguido pelo novo nome de login. 

Se você quiser mudar a pasta pessoal do usuário, use `-d` ou `--home` seguido pelo caminho completo da nova pasta. Só isso irá criar uma nova pasta, caso não exista, e usá-la como padrão, mas *não irá mover o conteúdo da pasta antiga para lá*, para fazer isso, use também `-m` ou `--move-home`.

Caso precise alterar a senha, pode usar o `sudo passwd <nome-do-usuario>`

## Apagando um usuário

Ok, até agora criamos um usuário, verificamos se ele existe mesmo, fizemos login, alteramos a conta e a senha. Mas e se eu quiser deletar?

Use o comando `userdel <nome-do-usuario>`. Ele irá apagar *apenas o usuário*, caso você queira apagar sua pasta pessoal também, use `-r` ou `--remove` antes do nome do usuário. 

Isso irá apagar sua pasta pessoal e seu conteúdo. Caso haja algum arquivo ou pasta que não seja do usuário que está sendo apagado, o mesmo não será apagado. Se quiser forçar, pode passar o parâmetro `-f` ou `--force`
