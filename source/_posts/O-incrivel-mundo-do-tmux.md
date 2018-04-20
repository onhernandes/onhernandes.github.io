---
title: O incrível mundo do tmux
date: 2018-04-19 15:52:16
tags: tmux produtividade terminal
description: Você tem um momento para falar de tmux? Venha para o lado negro da força e aumente sua produtividade!
thumbnail: thumbnail.jpg
---

# tmux - o que é

Tmux é uma ferramenta que basicamente te dá o controle de sessões, janelas e painéis dentro de um único terminal. Sim, você pode voltar pro bom 
e velho `xterm` e configurar como quiser. Segundo o Wiki deles:

{% blockquote %}
tmux is a "terminal multiplexer", it enables a number of terminals (or windows)
to be accessed and controlled from a single terminal. tmux is intended to be a
simple, modern, BSD-licensed alternative to programs such as GNU screen
{% endblockquote %}

![](tmux.gif)

# Instalando

Provavelmente o tmux é suportado pelo seu gerenciador de pacotes - não sei como estão as coisas pra Windows.

Usando o Pacman: `sudo pacman -S tmux`
Usando o apt-get: `sudo apt-get install tmux`

# Básico

Para começar o tmux, você precisa criar uma sessão. Você tem duas formas, apenas digitando `tmux` no terminal(criando uma sessão chamada 0), ou `tmux new -s <nome-da-sessao>`

Assim que você entrar no tmux, estará dentro de uma sessão, no primeiro painel e na primeira janela.

Para acionar qualquer coisa do tmux, você precisa apertar o prefixo primeiro, para dizer ao tmux que está acionando um comando. O prefixo 
padrão é `CTRL + b`.

{% blockquote %}
Vou usar o acento `^` para indicar o `CTRL`. Por exemplo, `^b` é o mesmo que `CTRL + b`. Lembre-se que todos os comandos do tmux *são* sensivos 
a caixa alta e baixa. Então, `^b` não é o mesmo que `^B`. Todo conteúdo sobre tmux que você pesquisar, vai usar essa notação.
{% endblockquote %}

## Alguns pontos sobre o tmux:

- Você vai notar uma barra inferior assim que entrar em uma sessão do tmux, nela você vai ver o nome da sua sessão, suas janelas, seu 
usuário@grupo, horário e data atual
- Se você quiser sair do tmux, basta digitar `exit` no terminal

## Painéis

Vamos começar a brincar. Aperte `prefix + %` - coloque seu prefixo no lugar de `prefix` e você pode apertar `Shift + 5` pra produzir o `%`. 
Você vai dividir sua tela em duas partes. Quer ir para o outro painel? `prefix + o` é a solução.

- `prefix + %` divide sua tela horizontalmente
- `prefix + "` (aspas duplas) divide sua tela verticalmente
- `prefix + o` te coloca no próximo painel
- `exit` sai do terminal(consequentemente, da sessão do tmux)

# Até a próxima!

Isso foi só por hoje. No próximo artigo vou falar mais sobre as janelas do tmux, mas isso já é o suficiente pra você aprender a brincar com o 
tmux.

tmux no Github: [https://github.com/tmux/tmux](https://github.com/tmux/tmux)
Wiki to tmux: [https://github.com/tmux/tmux/wiki](https://github.com/tmux/tmux/wiki)
awesome-tmux: [https://github.com/rothgar/awesome-tmux](https://github.com/rothgar/awesome-tmux)
