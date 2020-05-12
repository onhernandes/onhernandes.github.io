---
title: 'Terminais são legais v2: trabalhando com arquivos e pastas'
date: 2018-06-10 20:14:57
description: 'Aprendendo a mexer com pastas e arquivos'
thumbnail: files.jpg
---

![](/images/Terminais-sao-legais-v2-pastas/files.jpg)

Anteriormente dei [uma breve introdução sobre o terminal](/artigos/terminais-sao-legais-como-comecar-a-usar/) e falei também sobre [como ler e filtrar coisas](/artigos/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/). Hoje vou abordar um pouco mais sobre arquivos e pastas.

Antes de tudo, recomendo você executar o seguinte comando: `cd $HOME`. Isso irá te levar até sua pasta pessoal, então criaremos tudo a partir dela.

## Comandos básicos

Vou abordar os seguintes comandos:

- `ls`
- `cd`
- `mkdir`
- `mv`
- `rm`
- `touch`
- `cp`

Já falei aqui sobre alguns deles, mas vou me aprofundar mais dessa vez, vamos lá:

### Um rápido lembrete

No terminal, você navega entre pastas, e a pasta atual é sempre denotada antes do *$* que aparece, como aqui temos o nome do meu usuário, meu grupo e minha pasta atual:

![](/Terminais-sao-legais-como-comecar-a-usar/user-terminal.png)

Ok, eu sei que é um pouco repetitivo, mas quando formatei não tive ideia de qual nome colocar, então ficou nisso mesmo hehe.

Para se referir à um nível superior à sua pasta atual, use `../`. E para sua pasta atual, use apenas o `./`. Para se referir à raiz do sistema, comece com uma `/`.

## Criando pastas e arquivos

Como disse em outro artigo, para criar arquivos, podemos usar o comando `touch`, passando o nome completo do arquivo. Seja na mesma pasta, ou em outro caminho, ele irá fazer seu trabalho. Você também pode mudar o horário de acesso ao arquivo, usando o parâmetro `-a`, e pode definir o tempo com `-d` ou `--date=STRING`. Bom, eu normalmente uso ele apenas para criar arquivos, embora você possa também alterar a data de modificação e abertura.

Mas e se você quiser criar uma pasta? Use o `mkdir`, passando o caminho desejado, como em `mkdir teste`. Irá criar uma pasta chamada `teste` onde estiver. Para verificar, execute `ls -l`, assim você irá listar o conteúdo da pasta atual, veja se o que criou está lá. Se quiser abrir o gerenciador de arquivos e navegar até sua pasta pessoa, verá que ela estará lá.

Você também pode criar várias pastas, se passar um nome em seguida do outro, como `mkdir teste teste2 teste3` - o mesmo serve para o `touch`

E se quiser criar uma pasta dentro de outra? Bom, aqui temos duas formas possíveis: usando uma combinação de `mkdir` com `cd`, criando uma pasta, entrando nela, criando outra e assim consequentemente ou...

Usando o parâmetro `-p`. Ele faz todo esse serviço pra você, se executar `mkdir -p teste/com/mkdir`, verá que ele criou a pasta `teste`, dentro dela, `com`, e dentro dela também, `mkdir`.

Até aqui você criou várias pastas, e acredito que não precisará delas mais. Para apagá-las, use o comando `rm -r PASTA`, como em `mkdir -r teste`. Ele irá apagar a pasta `teste` e tudo que estiver dentro dela.

## Copiando e movendos arquivos e pastas

Mas digamos que agora você precise copiar alguns arquivos de uma pasta para outra, ou quem sabe, uma pasta inteira para outro lugar?

Pode usar o comando `cp`. Ele simplesmente copia algo e envia para outro lugar. Funciona assim: `cp ORIGEM DESTINO`

Primeiro, vamos criar o arquivo `teste.txt` e a pasta `textos` com `touch teste.txt` e `mkdir textos`.

Vamos copiar o arquivo para dentro da pasta, executando `cp teste.txt textos/`

Alguns pontos:

- Você percebeu que aqui, eu passei o nome do arquivo diretamente? Eu poderia também ter feito `./teste.txt`, caso o caminho absoluto seja omitido, o terminal irá considerar que o arquivo está na mesma pasta que você.
- Aqui eu usei `textos/`, porque também, o terminal considerou que a pasta está na mesma que eu estou.

Agora vamos dar uma olhada dentro de `textos` com `ls textos/`. Veja que o mesmo arquivo está lá. Como foi uma *cópia*, o arquivo existe em ambos lugares, e são iguais(agora, pois não alteramos nenhum deles). Se você apagar o arquivo inicial, a cópia ainda estará lá, pois não estão ligados de nenhuma forma.

Já pensou se um dia você precisar mover mais de um arquivo? Talvez terá que executar o comando várias vezes, mudando apenas o nome do arquivo de origem...ou não. 

Caso os arquivos de origem estejam na mesma pasta, você pode fazer algo como `cp ./* textos/`, para selecionar todos os arquivos dentro da pasta atual, ou caso queira especificar apenas alguns de uma extensão específica, pode fazer `cp ./*.jpg textos/`, selecionando apenas aqueles que sejam do formato .jpg. Você também pode fazer coisas como `cp teste* textos/`, selecionando tudo que comece com a palavra `teste`.

Você também pode passar várias origens, o último caminho será usado como destino.

Caso esteja copiando pastas, pode usar o parâmetro `-r`, para copiar pastas recursivamente.

Ok, mas agora precisamos *mover* o arquivo. Primeiro, remova a cópia de `textos/`, usando o comando `rm`: `rm textos/teste.txt`.

Para mover arquivos, você pode usar o comando `mv`, ele funciona exatamente como o `cp`. A diferença é que ele *move* arquivos, então o arquivo existirá apenas no destino.

Execute `mv teste.txt textos/` e veja que o arquivo não existe mais, apenas dentro de `textos/`.

Outra grande utilidade para o comando `mv`, é a capacidade de *renomear* as coisas. Você simplesmente move o arquivo para o mesmo lugar, com um nome diferente. Execute `cd textos/`, para entrar na pasta e depois faça `mv teste.txt starwars.txt` e use `ls` para ver o conteúdo da pasta, veja que não há mais `teste.txt`, apenas `starwars.txt`. O mesmo pode ser feito com pastas =]

## Até mais!

Bom, até aqui, você aprendeu como copiar, mover, renomear, remover e criar pastas e arquivos, também a navegar entre eles. Logo falarei mais sobre permissões de arquivos e outras coisas bem legais.

Se tiver alguma dúvida, deixe nos comentários aí!

Até a próxima =]
