---
title: Brincando com janelas no tmux
date: 2018-05-22 14:13:16
---

# Janelas, painéis e terminais

Eu escrevi [outro artigo](/artigos/o-incrivel-mundo-do-tmux/) introduzindo ao tmux, aconselho você a ler antes de continuar caso não conheça o tmux.

Painéis no tmux são apenas divisões na mesma tela. Você consegue navegar entre elas. É algo bem útil para, por exemplo, editar um arquivo enquanto executa testes em outro painel e acompanha a saída de um log.

Janelas são uma abstração superior: você tem várias janelas dentro do tmux, cada uma com seu próprio layout de painéis, scripts e ambiente.

No começo eu usava no máximo três painéis e duas janelas. Uma com o trabalho e outra com o `weechat`. Depois de um tempo, aprendi a usar mais e mais, atualmente estou usando cerca de 4 ~ 5 janelas no tmux.

## Abrindo uma nova janela

Bom, assim que você abre o tmux, você já está numa janela. Todas as janelas são numeradas e tem títulos, por padrão, é o comando que você está executando agora.

Se você se atentar a barra inferior do tmux, vai perceber que tem o nome da sua sessão e logo em seguida, o `número-da-janela:título`, como aqui tenho o `0:bash`, `1:tt`, `2:app`, `3:laradock`, `4:wr`. São, respectivamente, coisas do trabalho(vim, API rodando e outro painel com git e etc), [client do Twitter](https://github.com/orakaro/rainbowstream), front-end da empresa, essa do laradock eu uso pra controlar o docker e executar algumas coisas com sudo(talvez seja uma má prática, mas já fica logado como root) e por último, outro vim aberto com algo do [BackEndBrasil](https://github.com/backend-br/) ou um artigo que esteja escrevendo.

![](/images/Brincando-com-janelas-no-tmux/current-tmux-windows.jpg)

Para começar, abra o tmux, abra dois ou mais painéis. Depois, pressione `prefix + c`, perceba que agora seus painéis sumiram, é como se você tivesse aberto o tmux agora, certo?

Olhe para baixo, na barra inferior, você tem sua nova janela aberta, provavelmente está escrito `1:bash`. Mas digamos que você queira abrir o `nano`, abra-o. Agora você quer continuar no nano, mas precisa voltar para a outra janela...o que faz?

Pressione `prefix + NUMERO_DA_JANELA`, no caso, `prefix + 0`. Você já está na outra janela. O número é exatamente o mesmo que está na barra inferior =)

Mas agora, você precisa renomear as janelas, afinal, o título não é muito descritivo...pressione `prefix + ,` em seguida apague o título atual e escreva o que quiser, depois aperte `Enter`.

Sua janela tem um novo nome =D

E se você quiser fechar essa janela, use o bom e velho `exit`.

> Se você apertar `prefix + :` e digitar `kill-window`, ele fecha sua janela atual. Cuidado que você pode perder algo se não salvar antes.

## Pronto!

Agora você já sabe como instalar o tmux, brincar com painéis, criar, renomear, fechar e mover entre janelas.

