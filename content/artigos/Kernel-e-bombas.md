---
title: "Kernel e bombas"
date: 2020-05-15T15:11:23-03:00
---

Como de costume em boa parte da população jovem neste país, acordei e já abri o Twitter pra ver se tinha alguma novidade no meio dessa coisa toda que a gente tá vivendo.

Aí eu vi [este tweet](https://twitter.com/o_gabsferreira/status/1261273502432350209) do Gabs compartilhando [essa notícia](https://androidrookies.com/huawei-dev-team-sends-a-buggy-hksp-patch-with-backdoor-to-linux-foundation/) sobre a Huawei ter tentado implementar o HKSP (Huawei Kernel Self Protection) no kernel, que possuía um backdoor. Pelo que diz no artigo, a empresa já é infame por problemas relacionados a segurança. 

Bom, a empresa negou o envolvimento e disse que foi trabalho de um indivíduo e não reproduz nada da empresa. Coincidentemente, a conta responsável pelo patch pertence a um funcionário da empresa, que também é funcionário principal de segurança nível 20 na Huawei.

Ah, só pra completar, no README.md do [repositório](https://github.com/cloudsec/aksp) há um disclaimer que distancia a empresa do projeto e dá a responsabilidade ao dono do repositório. Porém, o commit que adicionou esse disclaimer estava datado para o dia da criação do repositório, mas segundo a [Grsecurity](https://grsecurity.net/huawei_hksp_introduces_trivially_exploitable_vulnerability), conseguiram detectar que o commit foi feito na segunda de manhã, mas datado para o dia da criação, talvez numa tentativa de dizer que a acusação não levou em conta todos os detalhes.

Mas como isso é possível? Bom, é simples: alterando a data do commit. Por exemplo, eu escrevi esse artigo na sexta-feira dia, mas só criei o arquivo no repositório e o publiquei na segunda-feira, dia 18 de março. Se você olhar no arquivo e na data que especifiquei, estou apontando pra sexta-feira. Você consegue perceber que fiz isso olhando a data do commit que contém esse arquivo.

E como descobrir que alteraram a data do commit? Dá pra usar a API do Github, que guarda a data original de cada evento.

O bug? Bom, dentre várias críticas e problemas no código, `this introduces a trivially exploitable kernel stack buffer overflow able to be performed by any unprivileged user`, resumindo no português: a vulnerabilidade permitia que qualquer um pudesse dar uma sobrecarga em um arquivo, até usuários sem privilégios extras.

Uma bomba dessas nunca fará algo de bom, né?

### Bombas

Ao criar novas aplicações, sabemos que precisamos de segurança. Assim como o kernel precisa, e como alguém tentou ajudar (talvez não da melhor forma e nem na melhor intenção), nossas aplicações também precisam de ferramentas pra ajudar na segurança.

Aqui entram várias regras, dicas, programas e utilitários pra auxiliar e melhorar a segurança da nossa aplicação.

Mas algum dia, em algum momento, alguém pensou: e se o ataque for realmente a melhor defesa?

É, talvez não. Mas pode funcionar. Aí, invetaram o zip-bomb, que é basicamente um arquivo comprimido que possui 42kb, mas quando extraídos, esses 42kb se tornam lindos e belos 4,5 petabytes.

4,5 petabytes? Absurdo! Impossível. Mas o que é um petabyte? Aliás, quanto é um petabyte?

Um petabyte equivale a mil terabytes. E um terabyte, dá mil gigabytes. Ou seja, 4500000 gigabytes (4,5 milhões de gigabytes, se eu não estiver tão ruim assim de cálculo). Isso funciona por basicamente comprimir milhões de 0s.

Essa é a magia da [compressão](https://en.wikipedia.org/wiki/Data_compression)

### Beleza. Mas pra que?

Na era onde a gente tem que lidar com scraping e alguns serviços de scan, como o [wpscan](https://wpscan.org/), sabemos que temos algumas rotas "padrões" que são bastante acessadas por esses serviços de lookup, né?

Como `/admin`, `/wp-admin`, `/login`, e por aí vai (todos com extensões de PHP, HTML, ASP, etc). E melhor ainda, dependendo da implementação, o programa que está tentando fazer requisição, vai processar a resposta. E por isso entende-se descomprimir qualquer coisa que vier.

Imagine acessar o site do Google e ao invés de aparecer a barra de pesquisa, sua tela fica branca e seu navegador começa a baixar 4,5 milhões de GB na sua máquina. Acredito que ninguém tem nem RAM nem HD pra isso, né? Seu PC trava. A memória explode, aí tu tem que reiniciar, não tem jeito.

Além do zip-bomb, tem outras bombas por aí, como o [fork-bomb](https://www.cyberciti.biz/faq/understanding-bash-fork-bomb/) e etc.

### O mundo sem bombas

Ok, usar algo como o zip-bomb pode ser arriscado, dependendo do seu site/API. Ou até chato de implementar, já que tu precisa ter o arquivo, ler armazenamento, etc.

Além do zip-bomb ou qualquer coisa do tipo, tem gente que gosta de simplesmente redirecionar as URLs pra outro lugar, como [esse cara aqui](https://twitter.com/LiamHammett/status/1260984553570570240)

### Brincando com a sorte

Todo mundo sabe que algumas pessoas gostam de... levar as coisas mais ao extremo e de brincar com a sorte. Daí inventaram a roleta russa em bash. Não é nada complexo, e funciona em uma linha:

```docker
[ $[ $RANDOM % 6 ] == 0 ] && rm -rf / || echo *Click*
```

Isso utiliza a variável de ambiente `$RANDOM` para gerar um número randômico, e dependendo do resultado, apaga tudo que está na raiz do seu sistema. É, uma bomba, numa roleta russa.

### Alguns links

- [https://www.bamsoftware.com/hacks/zipbomb/](https://www.bamsoftware.com/hacks/zipbomb/)
- [Zip bomb na Wikipedia](https://en.wikipedia.org/wiki/Zip_bomb)
- [Tar bomb!](https://en.wikipedia.org/wiki/Tar_(computing)#Tarbomb)
- [Como criar uma zip-bomb? CUIDADO](https://stackoverflow.com/questions/1459673/how-does-one-make-a-zip-bomb)
