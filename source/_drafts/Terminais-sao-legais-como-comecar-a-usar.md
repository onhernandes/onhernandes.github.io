---
title: 'Terminais são legais: como começar a usar'
tags:
---

# Terminal, o que é?

Basicamente, uma janela onde você escreve `comandos` para o computador executar. Esses comandos podem ler um arquivo, criar pastas, executar scripts, fazer café e muito mais. (é sério)

# Eu sei o que é, mas é díficil..

Não. Não é difícil.

Muita gente acaba evitando o terminal porque acreditar ser muito difícil e confuso, mas se você pensar bem, é simples demais: apenas texto. 

Você só precisa ler, entender a saída e digitar o comando certo para o que precisa. Se algo der errado, você vai saber ali mesmo e quase sempre, saber o que fazer em seguida.

# Por onde começar?

Vou dar algumas dicas de onde começar a usar o terminal, só para você se acostumar com ele.

Se você já programa em JavaScript, PHP, Go, Python, etc, já deve ter usado o terminal para executar algo, ou instalar algo. Acredito que na maioria das vezes só copiou e colou, e no máximo decorou algo sem entender. Vou pular essa parte, em breve irei focar mais em linguagens específicas, mas vamos brincar um pouco.

## Introdução

Para começar, abra o terminal. Vou considerar que está no linux.

Assim que você abrir o terminal, estará em uma pasta, normalmente vai aparecer logo depois do nome do seu usuário e do seu grupo atual, veremos sobre isso em outro artigo.

Aqui é tudo muito simples: você sabe seu usuário atual, grupo, pasta e tem um espaço pra digitar os comandos, mais nada.

Você só precisa abrir a janela, digitar seu comando e apertar `Enter` para executar.

## Brincando com `grep`, `ls` e `cd`

Vamos do básico:

- `cd` serve para caminhar entre pastas
- `ls` lista o conteúdo da pasta atual e outras
- `grep` filtra a saída de algo(texto)

Ok, agora que tal ir para a sua pasta pessoal? Não sabe qual é? Sabe quando você abre o gerenciador de arquivos e tem uma pasta com seu nome, com suas coisas e etc? Então, é lá.

Para chegar lá, temos várias formas de navegar usando `cd`:

- Use `cd ~`, o `~` serve como atalho
- Use `cd $HOME`, sendo que `$HOME` é uma váriavel contendo o caminho completo
- Use `cd /home/NOME_DO_SEU_USUARIO`

{% blockquote %}
Todo terminal tem variáveis! Uma dela apresentada agora é a `$HOME`, como dito, contém o caminho completo da sua pasta pessoal.
{% endblockquote %}

Todas as alternativas levam para o mesmo lugar: sua pasta pessoal.

Mas, um momento, o que tem aqui? Digite `ls`. Viu que surgiu várias palavras, digo, nomes de pastas e arquivos? Mas está tudo na mesma linha, está difícil de ler...

Execute `ls -l` e veja tudo numa lista bonita. Ok, tem algumas coisas estranhas a esquerda, mas você percebeu que tem o seu nome de usuário, nome do seu grupo, alguns números, data e o nome dos arquivos?

O `-l` faz a listagem ficar mais fácil pra leitura.

Escolha uma pasta, arquivo, qualquer coisa que tenha aparecido na lista. Só o primeiro nome ou parte dele serve.

Agora execute `ls -l | grep NOME`, com o nome que você escolheu. Percebeu que só apareceu o que você *filtrou*?

`grep` serve basicamente para filtrar saídas. O `|` que você colocou, indica que `grep` será executado após `ls -l` e usará o resultado como entrada.

{% blockquote %}
No terminal, você pode _juntar_ comandos. Agora, usamos o `|` para enviar a saída de um comando para outro, mas você poderia usar `&&` para executar comandos consecutivamente(caso o primeiro falhe, os restantes também falharão) 
Você também pode usar `>` para redirecionar a saída a um arquivo, apagando todo o conteúdo, ou usar `>>` para adicionar ao fim do arquivo. Como `echo 123 > test.txt`, vai colocar `123` dentro do arquivo `test.txt` dentro da pasta atual.
{% endblockquote %}

