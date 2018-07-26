---
title: 'Terminais são legais v4.0: processos'
date: 2018-07-23 14:12:00
description:
thumbnail:
tags:
---

## Anteriormente...

Vimos algumas coisas legais sobre Linux, se você ainda não leu ou quer refrescar sua memória, se liga:

- [Terminais são legais: como começar a usar ](/terminais-sao-legais-como-comecar-a-usar)
- [Terminais são legais v1: lendo e filtrando arquivos](/terminais-sao-legais-v1-lendo-e-filtrando-arquivos/)
- [Terminais são legais v2: trabalhando com arquivos e pastas](/terminais-sao-legais-v2-pastas/)
- [Terminais são legais v3.0: usuários](/terminais-sao-legais-v3-usuarios/)
- [Terminais são legais v3.1: grupos de usuários](/terminais-sao-legais-v3-1-grupos-de-usuarios/)
- [Terminais são legais v3.2: permissões](/terminais-sao-legais-v3-2-permissoes/)

E hoje vamos aprender um pouco mais sobre processos.

# Processos?

Um processo é a representação/instância de um programa, dentro do seu sistema operacional. Um programa, pode ter vários processos, para melhorar a performance, por exemplo.

O Google Chrome usa/usava um esquema onde cada guia tinha seu próprio processo, sua própria alocação de memória e etc, assim o controle de guias era melhor, o consumo era isolado e caso o processo não respondesse mais, *matar* aquele processo não atrapalharia o navegador em si.

Todo processo pode ter processos-filhos, e tem um pai.

No exemplo do Google Chrome, você tem o processo do navegador em si, e tem vários outros processos para extensões e guias.

## Trabalhando com processos

Para ver processos, temos alguns comandos muito úteis, com eles podemos obter o PID(Process ID) atual e do processo pai, também quantia de memória sendo usada, CPU utilizada, quanto tempo está sendo executado, *quem executou*(usuário, grupo), e muito mais.

Começando, temos alguns comandos:

- `htop` ou `top`
- `ps`
- `pstree`

O `top` e `htop` servem pra mostrar uma grade com processos atuais, segue um printscreen do `top` e em seguida do `htop`:

![tabela de processos mostrando nome, PID, consumo de memória, CPU e mais](top.png)
![tabela de processos mostrando nome, PID, consumo de memória, CPU e mais](htop.png)


