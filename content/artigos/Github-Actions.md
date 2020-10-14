---
title: "Github Actions"
date: 2020-10-14T10:46:26-03:00
draft: false
toc: false
images:
  - "/images/robot-arm.jpg"
description: "Já precisou usar algum CI? Como CirleCI ou TravisCI, Semaphore, etc. Caso já tenha se aventurado por essas terras, chegou um novo brinquedinho: Github Actions"
tags:
  - continuous delivery
  - continuous integration
  - ci
  - cd
  - automacao
  - testes
  - workflow
  - jobs
  - actions
  - yaml
---

Já precisou usar algum CI? Como CirleCI ou TravisCI, Semaphore, etc. Caso já tenha se aventurado por essas terras, chegou um novo brinquedinho: Github Actions.

Sim. Continuous Integration diretamente no seu repositório. Um pouco atrasado eu diria, porque o Gitlab e Bitbucket já possuem essas funcionalidades há algum tempo mas - melhor agora do que nunca, né?

O nome é um pouco diferente em comparação com outras ferramentas, mas funciona. Testei e configurei com NodeJS, Java e até [a página do meu usuário no Github](http://github.com/onhernandes/) é automatizada com o Github Actions, usando um pequeno bot para colocar meus artigos mais recentes em exibição.

### Dissecando um workflow

Como usar? Vá até seu repositório de escolha e clique na aba Actions:

![Captura de tela de uma parte da tela ao acessar um repositório, exibindo apenas o nome do repositório (minha pasta pessoal onhernandes) e abaixo, as abas como Code, Issues, Pull Requests, Actions e Projects - todas organizadas lado a lado, na ordem descrita](/images/Github-Actions/screenshot-github-repo-menu.jpg)


Quando se acessa sem nenhuma ação configurada, você vai ver uma tela mais amigável, com indicações de *workflows* para usar.  O primeiro é o clássico *Olá mundo!* onde só emitimos uma mensagem nova. Abaixo, temos as indicações

O melhor do Github Actions é que quando você tenta adicionar uma nova ação, você pode fazer isso diretamente na plataforma. 

Ao selecionar um *workflow* para seu repositório, você é redirecionado à essa tela:

![Captura de tela da página para adicionar um novo workflow no meu repositório. No começo, há o caminho do arquivo que é "dotfiles/.githug/workflows/blank.yml", em seguida, a tela é dividida em duas partes horizontais. À esquerda, temos um edito de texto com o conteúdo do nosso arquivo, e do lado direito, podemos ver a loja de workflows do Github e até uma documentação explicando o código direitinho. Há também um botão verde para iniciar um commit diretamente de dentro da plataforma](/images/Github-Actions/screenshot-github-action-edit.jpg)

Primeiro, definimos o título do nosso *workflow*. Com o exemplo de olá mundo, o nome padrão é CI, mas você pode alterar para o que quiser - linter, tests, build, etc

Na sequência, definimos o gatilho desse *workflow*, ou seja, qual evento na aplicação vai ativar esse fluxo todo? Push, pull request, etc. 

Por padrão, definimos dois gatilhos: um para o evento de *push*, no branch *master* e outro ao abrir um *pull request*, no branch *master* também. Toda vez que alguém fizer um *push* na branch *master*, esse *workflow* será executado.

Por último, temos os *jobs* - ou seja, as etapas que serão executadas. O que vamos fazer? Rodar testes, linter, fixer, verificar status?

Não conheci até hoje boas práticas para *workflows* e *jobs*, já que cada implementação varia de empresa pra empresa -  uma dica que dou é, siga *KISS* (keep it simple, stupid) e *SRP* (single responsability principle), um breve resumo: mantenha os trabalhos o mais simples possível, e nunca crie um trabalho com mais de uma responsabilidade, todo trabalho deve fazer sua função e deve fazê-la bem, com sucesso.

Com isso você evita que o mesmo trabalho execute mais de uma tarefa, o que deixaria difícil de testar.

Os trabalhos do Github Actions tem duas partes principais: runs-on e steps. 

Começando com `runs-on`, definimos o ambiente que nosso trabalho vai ser executado - aqui podemos trabalhar com Ubuntu, Windows ou MacOS.

Na parte de `steps`, declaramos as etapas e passos que nosso trabalho vai executar, quais ações do Github vamos usar - ou seja, cada ação pode ser um trecho de código que você ou outra pessoa fez no seu repositório ou em outro repositório público, ou até mesmo uma imagem no Docker Hub; assim você consegue mesclar várias ações em um único fluxo, inclusive, pode definir versões, passar parâmetros, variáveis de ambiente e por aí vai.

Temos uma ação bem interessante que usamos sempre: `actions/checkout@v2`. Ela faz um checkout do seu projeto na máquina atual.

Além disso, você pode criar sua própria ação de 3 formas:

1. Usando código em JS dentro de um repositório público no Github (é executado diretamente na máquina, sem pré requisitos)
2. Através de uma imagem publicada no [hub.docker.com](hub.docker.com)
3. Juntando vários comandos shell em uma única ação (veja a documentação no final)

A grande limitação é que por hora, se você estiver usando uma imagem publicada no Docker Hub, só poderá usar em máquinas Linux (definido no `runs-on`).

Depois de definir tudo, você pode usar o botão no canto superior direito chamado "Start commit", através dele você consegue adicionar um novo commit na hora, ou abrir um Pull Request.

O caminho do arquivo que irá ser criado está definido no topo, o Github detecta seus fluxos dentro de `.github/workflows` no seu repositório.

### Conhecendo um workflow na prática

Para exemplificar, vou colocar aqui meu workflow para o [repositório do meu usuário no Github](https://github.com/onhernandes/onhernandes/blob/main/.github/workflows/latest-posts.yml):

```yaml
name: Latest blog post workflow
on:
  push:
  schedule:
    # Runs every week
    - cron: "0 19 * * 1"

jobs:
  update-readme-with-blog:
    name: Update this repo's README with latest blog posts
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: gautamkrishnar/blog-post-workflow@master
        with:
          feed_list: "https://onhernandes.dev/index.xml"
```

Primeiro, defini o nome: Latest blog post workflow

Em seguida, temos os gatilhos. O fluxo todo é executado por um agendamento, é uma das formas de você executar o seu fluxo completo. No caso, é executado toda segunda-feira, às 19h.

Eu só defini um único trabalho: atualizar o [README.md](http://readme.md) do meu usuário com os últimos posts. Estou executando dentro do Ubuntu, com a última versão. Nas ações, a principal que estou usando é `gautamkrishnar/blog-post-workflow@master`, onde eu só preciso passar como parâmetro um link que leva pro RSS do meu blog.

Com isso, consigo atualizar minha página no Github, adicionando os posts mais recentes do blog toda segunda-feira às 19h.

O problema é que nem sempre eu consigo publicar na segunda-feira, então, estou adicionando `workflow_dispatch` na lista de gatilhos que ativam o fluxo todo, assim consigo executá-lo diretamente do painel do Github Actions no meu repositório.

Se você quiser ler mais sobre Github Actions, recomendo seguir diretamente para um repositório seu e adicionar um Github Action! Qualquer coisa só apagar o arquivo e tá tranquilo.

### Referências

- [https://docs.github.com/en/free-pro-team@latest/actions](https://docs.github.com/en/free-pro-team@latest/actions)
- [https://docs.github.com/en/free-pro-team@latest/actions/quickstart](https://docs.github.com/en/free-pro-team@latest/actions/quickstart)
- [https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/about-actions#types-of-actions](https://docs.github.com/en/free-pro-team@latest/actions/creating-actions/about-actions#types-of-actions)
