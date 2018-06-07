---
title: 'Terminais são legais v1: lendo e filtrando arquivos'
date: 2018-06-05 16:13:50
description:
thumbnail: 'filters-espresso-machine-filter-coffee.jpg'
tags:
---

![](filters-espresso-machine-filter-coffee.jpg)

# Lendo e filtrando arquivos

[No artigo anterior](https://hernands.com/terminais-sao-legais-como-comecar-a-usar/), falei um pouco sobre começar a usar o terminal, e hoje vamos brincar um pouco com leitura e filtragem de arquivos.

Os comandos que veremos hoje são:

- `cat`
- `less`
- `tail`
- `grep`, `egrep`, `fgrep`
- `history`

## Lendo arquivos com `cat`, `less`, `tail`

### `cat`

Não, você não exibe um gato na tela(poderia..). Com `cat` você basicamente lê *todo* o conteúdo de um arquivo(ou mais) na tela.

Vamos começar criando um arquivo, preenchê-lo com um texto qualquer e ler seu conteúdo. Execute: `echo "SEU NOME" > teste.txt`. Depois, use o `cat` para ler o conteúdo do arquivo: `cat teste.txt`.

Como disse, o `cat` simplesmente lê *todo* o conteúdo do arquivo, lembre-se que é *todo o conteúdo*, você irá entender melhor depois.

`cat` aceita o nome de um arquivo, ou mais, ele irá concatená-los, ou seja, juntá-los na exibição.

### `less`

Como você já tem o arquivo `teste.txt` criado, vamos direto para a prática: execute `less teste.txt`. Percebeu que apareceu o conteúdo do arquivo, porém algo parecido com `(END)` no final? É porque o arquivo contém pouco conteúdo, para sair pressione `q`.

Vamos testar com algo maior. Abra [http://mussumipsum.com/](http://mussumipsum.com/) e gere um texto com 150 parágrafos, abra o arquivo `teste.txt` no seu editor e insira o texto lá, salve e feche.

{% blockquote %}
Você pode "limpar" seu terminal, removendo tudo que já fez: pode executar o comando `clear`, ou usar o atalho `CTRL + l`
{% endblockquote %}

Bom, se o texto for grande o suficiente, você verá que o `less` está de fato exibindo o conteúdo do arquivo, porém não é tudo. Aqui você pode navegar usando as setas para cima/baixo, e se precisar sair, pressione `q`.

Se quiser pesquisar dentro do `less`, você pode apenas pressionar `/` e em seguida digitar a palavra(a pesquisa será para frente), ou fazer o mesmo com `?` para trás. Se usar o `&`, irá apenas exibir as linhas que combinaram

`less` é um comando bem complexo com várias coisas legais e logo irei escrever um artigo apenas sobre ele, mas por agora acredito que você aprendeu bastante hehe.

### `tail`

Esse comando é parecido com o `cat`, com a exceção de que ele fica *escutando* o arquivo, então caso outro programa altere seu conteúdo, você saberá. Ele tenta ler o arquivo novamente a cada 1 segundo. Para brincar um pouco melhor com isso, eu sugiro abrir dois terminais lado a lado.

Execute `tail -F teste.txt` e no outro terminal - navegue até a mesma pasta, caso não esteja - execute `echo TESTE >> teste.txt`. Verá que no primeiro terminal, o que você executou, apareceu, isto porque `tail` tem a capacidade de acompanhar o conteúdo de um arquivo.

Esse comando é ótimo para ficar assistindo arquivos de log de um servidor, por exemplo.

Com o `tail`, você pode passar o parâmetro `-f`, que ele irá "seguir" o arquivo(tradução literal da documentação), e se usar `-F`, ele irá fazer o mesmo, porém caso falhe na leitura, tentará novamente. Para sair, pressione `CTRL + c`.

E bom, se você não passar nenhum parâmetro, ele funcionará como o `cat`.

Você também pode passar mais de um arquivo, no caso ele irá exibir o nome do arquivo seguido pelo resultado.

Por padrão, ele lê apenas 10 linhas, mas você pode alterar isso usando o parâmetro `-n` seguido pela quantidade, ou `--line=10`.

Dependendo de quem está alterando o arquivo, pode ocorrer um erro na leitura, então o `tail` não irá funcionar. Você pode passar o paràmetro `--retry` para tentar novamente em caso de erro.

## Filtrando com `grep`, `egrep` e `fgrep`

Só para esclarecer, `egrep` é só um atalho para `grep -E`, assim como `fgrep` para `grep -F`.

Como dito no artigo anterior, `grep` serve para basicamente filtrar resultados...só que não, você pode também pesquisar dentro de arquivos. =]

Por exemplo: `grep mussum teste.txt` vai te dar todas as linhas que contém "mussum" dentro de `teste.txt`.

Quer executar alguma `RegEx`? Use `-E`. Como em `grep -e ^mussum teste.txt`. Mas você também pode passar uma frase, como em `grep -E "mussum lorem" teste.txt`.

Mas e se você está pesquisando dentro de algum arquivo de programação e realmente quer encontrar uma `RegEx` em si, ao invés de executá-la? Use `-F` ao invés de `-E`.

Percebeu que com `grep` você decide *o que quer que apareça*, mas e se eu quiser o contrário, que por exemplo, linhas que contenham *mussum* não apareçam? É só passar o parâmetro `-v` no começo, ele vai `reverter` o processo.

Ok, mas eu quero pesquisar em *todos* os arquivos na pasta atual, dentro de um projeto por exemplo, você só precisa colocar o parâmetro `-r` e não passar o nome do arquivo.

Mais outro caso, e se eu quiser pegar *apenas o trecho que combina com a minha busca*, ao invés da linha inteira? Use o parâmetro `-o`.

O `grep` e seus similares ignoram arquivos binários por padrão, caso queria realmente ver um binário com `grep`, use o parâmetro `-a`

E por último, e se eu quiser realizar vários filtros? Digo, filtrar várias palavras diferentes, por exemplo? É só concatenar tudo usando _piping_! Se liga: `cat teste.txt | grep mussum | grep -o mussum`. Assim você pode aplicar quantos `grep`s você quiser, sem problemas!

## Bônus: `history`.

Ele simplesmente te dá o histórico do seu terminal. Veja por si mesmo: `history`. Legal, não? É muito útil quando você precisa pesquisar uma série de comandos, ou está executando várias coisas e gostaria de se lembrar depois.

Caso queira pesquisar por algum comando e se lembra apenas de parte dele, pode pressionar `CTRL + r` e digitar um trecho do comando, o terminal vai pesquisar pra você dentro do histório e mostrar o que mais se encaixa, se você ver que está próximo do que tinha executado, pode parar de escrever e navegar com as setas =]

Se você ficou interessado por algum comando ou quer saber mais sobre ele, pode sempre passar o parâmetro `--help`, quase todos os comandos aceitam isso e exibem uma documentação sobre o comando, indicando como você pode usá-lo. Exemplos: `cat --help`, `less --help`, `grep --help`

# Até a próxima!

Por agora é isso, logo farei outros artigos sobre mais comandos do Linux, sistema de arquivos, permissões e etc.
