---
title: 'Terminais são legais v3.2: permissões'
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

E hoje vamos aprender um pouco mais sobre permissões.

## Sistema de Permissões no Linux

Bom, como você já deve ter visto por aí, alguns comandos como o `ls` exibem algumas combinações de letras estranhas, ou até sequências de números como `0777`, `0755`, `drwx-xr-x`, etc. 

Todas são *representações* das permissões de determinada pasta/arquivo. Normalmente, você vai encontrar a representação númérica em fóruns, artigos e etc, por ser mais fácil de decorar, e a outra, em comandos como `ls -l`.

### Mas o que significam?

Para começar, precisamos entender primeiro os *níveis de permissão* existentes no Linux.

Nós temos três: *ler*, *escrever/editar*, *executar*. 

Esses níveis são divididos em três grupamentos: usuário, grupo do usuário e outros grupos.
