---
layout: post
title:  Faça mais por você e menos pelo título
date:   2016-09-07 20:50:39 -0300
type: article
intro: Nem tudo é um cursinho de 3 meses
language: portuguese
---

Hey guys!

---------------

Bom, se você gosta do PHP, se você quer melhorar seus conhecimentos, se você quer deixar de ser um sobrinho, se você tá sem o que fazer, ou sei lá o que, continue lendo este artigo, garanto que vai te ajudar pra caramba.

---------------

Numa roda de amigos, batendo aquele lero sobre novas linguagens, daqui a pouco aparece o Lucas. Ele já chega fazendo alarde: "Galera, adivinha quem é o novo programador de PHP aqui hein? Euzinho \o, terminei aquele curso intensivo ontem, peguei meu certificado e já sou um programador de PHP!"

É, parece uma coisa sem nexo, mas é mais frequente do que tu consegue pensar em comida/café.

PHP é uma linguagem um tanto quanto velha já. Nosso companheiro de guerra surgiu em 1994 nas mãos de Rasmus Lerdorf - [leia mais aqui](http://php.net/manual/en/history.php.php)

De uns tempos pra cá, muitas ferramentas super bacanas foram criadas com PHP. [Wordpress](https://wordpress.org/), [PrestaShop](https://www.prestashop.com/pt/), [Magento](https://magento.com/), entre outros. Sem falar nos frameworks, mini-frameworks, libraries, etc.

Obviamente, você sabe disso melhor do que eu, juntamente com todas essas coisas bacanas veio também uma enxurrada de cursos sobre PHP. Joga "php" no YouTube e você vai encontrar muito mais cursos te ensinando a fazer um CRUD fajuto em PHP do que encontraria igrejas evangélicas em SP.

Me desculpa, mas essa daqui vai doer um bocado em boa parte:

Ter feito aquele curso no CodeCademy e saber mexer no WordPress não te faz um PHP Developer. Tampouco o teu certificado que conseguiu no/na/do Zend.

Não que as ferramentas e o certificado sejam ruins, pelo contrário, são ótimas, a questão é: não é aí que a linguagem acaba.

Já vi muita gente - e eu fiz/faço parte desse grupo - que, concluiu algumas coisas sobre PHP, montou alguma coisa meia-boca(me refiro à ideia de não ser algo completo) e já se acha o PHP Developer Ultimate FreeStyle LifeHacker. 

É o que comumente chamamos de **sobrinho**. Dei uma rápida pesquisada sobre o termo *sobrinho* no Google e inclusive fiz um [post em um grupo sobre dev web](https://www.facebook.com/groups/desenvolvimentoweb/permalink/1191013837623720/) a respeito disso, a maioria das pessoas definiram o sobrinho como um **amador**. Ou seja, o carinha-que-mora-logo-ali, que só viu algumas coisas no YT e aprendeu a mexer no WordPress, depois muda seu status no Facebook para "PHP Developer".

Okok, eu entendo que nem todo mundo tem grana pra fazer uma faculdade, ou ficar fazendo cursos aqui e acolá, etc. Mas isso não significa que você meu caro leitor(que talvez nem seja um sobrinho, mas apenas não aprimorou seus conhecimentos em PHP), tem que parar aí. Mas...

	"A vida é muito mais do que isso" - Autor desconhecido

Não só a vida, mas como o PHP também.

Você pode ter feito N cursos e lido XYZ de posts falando sobre PHP. Sempre tem alguma coisa nova. E não estou falando de frameworks, middlewares, libs ou coisas do tipo.

Esse vai ser um artigo um tanto quanto grande, por isso eu o dividi em duas partes e deixo para vocês, um pequeno sumário aqui.

## First things first

Você já ouviu falar sobre OOP? 

**Oriented Object Programming**, ou Programação Orientada à Objetos, é um paradigma muito bacana e útil para se seguir. Principalmente quando estamos no universo PHPzista.

Se você já tem um conhecimento sobre OOP, e quiser, pode pular para a [próxima](#writing-well) seção.

Vou aproveitar o gancho sobre OOP e também te trazer um pouco sobre PDO - PHP Data Object. E vou afirmar, **se você não conhece nada sobre OOP e não quer aprender sobre, sugiro que você pare de ler por aqui.** Programação orientada à objetos no PHP é o que vai te poupar de muita cagada(tabom, nem tanta assim, mas vai) e vai te ajudar muito nas futuras melhorias/atualizações/correções.

Existem várias definições sobre OOP, e alguns deduzem que PHP não é uma linguagem orientada à objetos por N motivos, mas isso não importa aqui, o que importa aqui é o aprendizado.

Vamos começar com o básico.

[OOP para iniciantes](http://code.tutsplus.com/pt/tutorials/object-oriented-php-for-beginners--net-12762) é um artigo muito bom para você começar, vai te dar um pequeno background geral sobre POO - PHP Oriented Object.

No site oficial do PHP, também tem uma [série de artigos](http://php.net/manual/pt_BR/language.oop5.php) falando sobre POO, não é 100% clara(pelo menos pra mim), mas vale uma leitura rápida.

Até no Viva o Linux(que é um fórum basicamente pra Linux, derrr), tem um [artigo bacana falando sobre PHP e OO](https://www.vivaolinux.com.br/artigo/PHP-Orientado-a-Objetos-Para-quem-esta-comecando)

E por último, eu recomendo você dar uma lida nesse [artigo do DevFuria](http://www.devfuria.com.br/php/oop-primeiro-contato/), fala sobre OOP com PHP, é bom ler.

Acredito que até aqui você já tem uma ideia de como trabalhar com POO, o resto fica por tua conta e pela prática :D

## PDO - PHP Data Object

Okok, você já tem um background generalizado sobre programação orientada à objetos, então é hora de começar a mexer com dados!

Eu sei que você provavelmente já deve ter visto tags/funções do PHP com *mysql_\* /*, e se está usando o PHP7(não sei porque estou falando isso, quase 2017 e não ter atualizado seu PHP é pedir pra apanhar do Apache) percebeu que essas funções já não funcionam como antes. E isto é porque o PHP7 já não usa mais o pacote(tá certo?) das funções *mysql_\*

## Escrevendo bem

Escrever um código de qualquer forma, ou seguindo seu conceito mental de OOP - Oriented object programming -, criar uma mistureba com os nomes, organizar seus arquivos da mesma forma que um adolescente de 13 anos faz com o seu quarto, não é exatamente e nem 100% ruim mas também não é o melhor a se fazer.

Senhoras e senhores, lhes apresento o [PHP-FIG](http://www.php-fig.org/), um site muito bacana, te ensina a fazer brownies maravilhosos.

O PHP-FIG tem uma secção só de recomendações, ou as famosas PSRs. Te ajudam muito.

---------------

### Antes de tudo, tu consegue ler em inglês?

Não que você realmente precise ser aquele fluente 100% falante do inglês, mas garanto que se você conseguir pelo menos ler alguns artigos em inglês, vai te ajudar muito. Tem uma extensão do Chrome Translate, ele te ajuda e me salva quando encontro algumas palavras dificeís. Se você não sabe ler nem um pouco de inglês, sugiro que desde já comece à estudar, quero dizer, caso você queria aproveitar o máximo da internet e os conhecimentos que ela oferece.

---------------

Como eu tinha dito, escrever um código de qualquer forma não é exatamente errado muito menos certo.

É mais como não cozinhar bem porque tem preguiça. Não é errado, porque você vai cozinhar de qualquer forma(bem ou mal), mas também não é certo cozinhar mal.

Aqui vai uma listinha muito bacana sobre as PSRs:

1. [PSR-1: Basic Coding Standard](http://www.php-fig.org/psr/psr-1/)
1. [PSR-2: Coding Style Guide](http://www.php-fig.org/psr/psr-2/)
1. [PSR-3: Logger Interface](http://www.php-fig.org/psr/psr-3/)
1. [PSR-4: Autoloader](http://www.php-fig.org/psr/psr-4/)
1. [PSR-6: Caching Interface](http://www.php-fig.org/psr/psr-6/)
1. [PSR-7: HTTP message interfaces](http://www.php-fig.org/psr/psr-7/)

Ainda sobre escrever bem:

Tem um site muito bacana, se chama *[PHP The Right Way](http://www.phptherightway.com/)*, é uma referência sobre como escrever e trabalhar com o PHP do jeito certo. Se quiser, tem a tradução dele [bem aqui](http://br.phptherightway.com/).

Bom, se tem o jeito certo de escrever, então também dever ter o jeito errado né nom? [PHP The Wrong Way](http://www.phpthewrongway.com/) e [PHP da maneira errada](http://www.phpthewrongway.com/pt_br/).

## Escrever bem não é tudo

Um bom escritor não escreve um bestseller da noite pro dia, sem um plano. 

Escrever bem e não ter um plano, é a mesma coisa que nada: você vai escrever muito bem, e vai apagar tudo que escreveu várias vezes porque organizando os arquivos da forma Y é melhor que X. E daqui há alguns meses, vai mudar tudo porque Z é melhor que XY.

Conheça os *Design Patterns*, ou, *Padrões de Projetos*. São padrões para você seguir e conseguir manter seu projeto de uma forma que, seja produtivo e que ajude futuras alterações e melhorias no código.

Aqui vai uma lista bacana sobre design patterns:

[O que são Design Patterns?](http://www.princiweb.com.br/blog/programacao/design-patterns/o-que-sao-design-patterns.html)
[Uma pequena introdução](http://www.devmedia.com.br/introducao-design-pattern/18838)

Existem vários padrões de projetos super bacanas e úteis pra seguir. Eles são ótimos, e o melhor de tudo é que você **não tem que seguir o padrão escolhido por completo**, você simplesmente pode alterar coisas que não lhe serão úteis e até adicionar o que você precisa.

A ideia é que através dos padrões de projeto você consiga ter uma ideia de como seguir com o projeto sem que te afete lá na frente - quero dizer, a gente sempre se lasca com atualizações, mas vamos tentar diminuir.

Esses são alguns dos padrões de projetos mais conhecidos hoje em dia(você não precisa decorá-los, faça como eu, só dê uma lida por cima e no que mais te agradar, vai fundo).
