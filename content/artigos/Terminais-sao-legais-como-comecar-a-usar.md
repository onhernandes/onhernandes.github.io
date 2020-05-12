---
title: 'Terminais são legais: como começar a usar'
description: 'Todo mundo talvez precise usar o terminal uma hora ou outra, e não é tão difícil quanto parece!'
thumbnail: 'learning.jpg'
date: 2018-06-02 16:47:14
---

![](/images/Terminais-sao-legais-como-comecar-a-usar/learning.jpg)

# Terminal, o que é?

Basicamente, uma janela onde você escreve `comandos` para o computador executar. Esses comandos podem ler um arquivo, criar pastas, executar scripts, fazer café e muito mais. (é sério, da pra fazer café)

## Por onde começar?

Bom, se você já programa, trabalha com PHP, NodeJS, Python, etc, talvez já tenha usado o terminal algumas vezes, copiando e colando comandos da documentação e/ou do StackOverflow. Mas hoje vou mostrar alguns comandos básicos e simples pra te ajudar no dia a dia.

Se você é novo na área, acabou de entrar e etc, eu sugiro você escutar [o podcast QuebraDev](http://quebradev.com.br/) pra te ajudar. Você vai entender melhor depois de escutar os primeiros episódios =]

## Introdução

Para começar, abra o terminal. Vou considerar que está no Linux ou MAC.

Assim que você abrir o terminal, estará em uma pasta, normalmente vai aparecer logo depois do nome do seu usuário e do seu grupo atual, como na imagem:

![](/images/Terminais-sao-legais-como-comecar-a-usar/user-terminal.png)

Aqui é tudo muito simples: você sabe seu usuário atual, grupo, pasta e tem um espaço pra digitar os comandos, mais nada.

Você só precisa abrir a janela, digitar seu comando e apertar `Enter` para executar.

Não é difícil, certo? Você só precisa ser cuidadoso com o que vai executar.

## Pastas, caminhos e etc

Essa é a parte crucial de se usar um terminal: você precisa entender como as coisas são ordenadas. Aqui você tem pastas, arquivos e _symlinks_(que são como atalhos comuns).

Vou citar aqui alguns atalhos:

- Quando você ver `.` significa que está se referindo à pasta atual, independente de onde estiver. Por exemplo: `./arquivo.txt` significa que estou me referindo ao arquivo `arquivo.txt` na pasta atual.
- Quando ver `..`, significa que está se referindo à pasta *superior*. Como em `../`.
- Quando você ver qualquer *caminho* começando com `/`, é porque aquele caminho *começa* da pasta raiz do sistema.
- Sempre quando você precisar definir caminhos, isto é, dizer onde está cada coisa, vai usar a `/` como separador. No Windows você usa `\`, no Linux e OSX, usa `/`. Como `./uma/pasta/aqui`.


## Variáveis e _piping_

Dentro do terminal - você pode ver alguém falar do terminal como `shell`, `bash`, são a mesma coisa -, você pode ter variáveis. É onde você guarda valores para usar em vários lugares(dentro da mesma janela) ou pelo sistema.

Vamos ver qual o caminho completo da sua pasta pessoal? Execute `echo $HOME`.

> O comando `echo` serve para exibir na tela algum texto, variável, etc. Você pode usar com qualquer outra coisa, como `echo 123`.

Viu que saiu algo como `/home/NOME_DO_SEU_USUARIO`? É o caminho da sua pasta pessoal.

Você pode criar sua própria variável *local* executando `VARIAVEL=VALOR`, em seguida, pode dar um `echo $VARIAVEL` para ver o valor. Quando for usar a variável em algum lugar, coloque um `$` no começo do nome, sem espaços.

Lembrando que variáveis podem ser minúsculas ou maiúsculas, mas não podem conter acentuação ou espaços.

Como costume/padrão, sempre criamos variáveis em caixa alta e separamos nomes com *_*.

### O que é _piping_?

É quando você precisa juntar dois comandos, ou executá-los ao mesmo tempo. Talvez você não use isso agora de começo, mas acredito que é necessário te dizer o que significam quando você ver por aí.

Para enviar a saída de um comando para outro, você pode usar o `|`, como em `echo 123 | grep 1` - veremos mais sobre `grep` depois.

Para executar um comando seguido do outro, consecutivamente, use `&&`. Exemplo: `echo 123 && echo 456`.

Para enviar a saída de um comando diretamente para um arquivo(sobreescrevendo ou criando), use `>`. Exemplo: `echo 123 > test.txt`. Para colocar a saída no fim do arquivo, sem reescrevê-lo, use `>>`.

Acredito que você não vai usar isso agora, mas é necessáro entender o que cada coisa significa.

## Aprendendo alguns comandos úteis

Vamos brincar com os seguintes comandos:

- `cd` serve para caminhar entre pastas
- `ls` lista o conteúdo da pasta atual e outras
- `grep` filtra a saída de algo(texto)
- `touch` cria um novo arquivo
- `rm` deleta um arquivo/pasta

Ok, parece muita coisa, mas não é, vamos aos poucos. Agora que tal ir para a sua pasta pessoal?

Para chegar lá, temos várias formas de navegar usando `cd`:

- Use `cd ~`, o `~` serve como atalho pessoal
- Use `cd $HOME`, sendo que `$HOME` é uma variável que contém o caminho completo
- Use `cd /home/NOME_DO_SEU_USUARIO`, indicando um caminho direto da raiz do sistema

Todas as alternativas levam para o mesmo lugar: sua pasta pessoal.

Mas, um momento, o que tem aqui? Execute `ls`. 

Viu que surgiu várias palavras, digo, nomes de pastas e arquivos? Mas está tudo na mesma linha, está difícil de ler...

Execute `ls -l` e veja tudo numa lista/tabela bonita. Ok, tem algumas coisas estranhas a esquerda, mas você percebeu que tem o seu nome de usuário, nome do seu grupo, alguns números, data e o nome dos arquivos?

O `-l` faz a listagem ficar mais fácil pra leitura.

> Quase todo comando aceita _parâmetros_, ou seja, são configurações especiais para dizer o que fazer exatamente e como fazer. No caso de `-l`, indica que queremos em forma de lista. 

Escolha uma pasta, arquivo, qualquer coisa que tenha aparecido na lista. Só o primeiro nome ou parte dele serve.

Agora execute `ls -l | grep NOME`, com o nome que você escolheu - atente-se ao `|`. Percebeu que só apareceu o que você *filtrou*?

`grep` serve basicamente para filtrar coisas. O `|` que você colocou, indica que `grep` será executado após `ls -l` e usará o resultado de `ls -l` como entrada.

Parece legal, não?

Digamos que você precise criar um arquivo agora, como faria? Iria abrir algum editor? Não precisa! Vá até a pasta que queira criar o arquivo e execute `touch ARQUIVO`, onde você pode colocar o nome do arquivo e extensão, ex: `touch texto.txt`, `touch index.js`.

Depois de criar o arquivo, é melhor verificar: na mesma pasta, execute `ls -l | grep ARQUIVO`, e veja se ele aparece.

Bom, mas e se você criar um arquivo, e depois decidir que não precisa mais dele? Você pode apagar usando `rm`: execute `rm ARQUIVO`.

> `rm` também pode ser usado para apagar vários arquivos do mesmo formato, com `rm *.js`, pastas com `rm -rf PASTA`, ou apenas o conteúdo de uma pasta, como `rm PASTA/*`. Há várias formas de usar o `rm` e você vai se acostumar mais logo logo. Só não use `rm -rf /` ou qualquer pasta na raiz, porque isso irá prejudicar seu sistema(é sério).

## Até a próxima

Bom, o artigo ficou um pouco extenso e vou deixar mais para outro. Por agora você já aprendeu alguns comandos bacanas, logo falo mais sobre permissões e outras coisas interessantes, inclusive mais a fundo sobre comandos básicos. Se tiver dúvidas, coloque nos comentários =D


