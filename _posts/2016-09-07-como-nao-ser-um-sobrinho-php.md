---
layout: 'article'
title:  'Como não ser um sobrinho no PHP'
lang: 'pt'
date:   2016-09-07 20:50:39 -0300
image: 'como_nao_ser_um_sobrinho.jpg'
intro: 'Nem tudo é um cursinho de 3 meses'
category: 'php'
tags: php curso tempo estudo
color: 'purple'
kind: 'article'
bg-color: 'purple'
magic: 'explode'
---

Hey guys!

Bom, se você gosta do PHP, se você quer melhorar seus conhecimentos, se você quer deixar de ser um sobrinho, se você tá sem o que fazer, ou sei lá o que, continue lendo este artigo, garanto que vai te ajudar pra caramba.

> Numa roda de amigos, batendo aquele lero sobre novas linguagens, daqui a pouco aparece o Lucas. Ele já chega fazendo alarde: "Galera, adivinha quem é o novo programador de PHP aqui hein? Euzinho \o, terminei aquele curso intensivo ontem, peguei meu certificado e já sou um programador de PHP!"

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

> "A vida é muito mais do que isso" - Autor desconhecido

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

O PDO, é uma classe nativa(não exatamente, você tem que instalar e ativar no php.ini) do PHP para tratar as conexões com o banco de dados.

> Mas eu realmente preciso usar o PDO?

Não, você pode continuar usando o MySQLi, mas PDO é mais seguro e melhor, os motivos, vou deixar você escolhê-los.

[Trabalhando com PDO](http://www.diogomatheus.com.br/blog/php/trabalhando-com-pdo-no-php/) é um belo começo, recomendo a leitura. Aproveite e dê uma lida nesse [aqui](http://glaucocustodio.com/2012/08/04/usando-pdo-do-php/) também, vai te guiar.

Se você prefere vídeos, [esse aqui](https://www.youtube.com/watch?v=etRFu_eJ3vU) é um belo começo.

## Escrevendo bem

Escrever um código de qualquer forma, criar uma mistureba com os nomes, organizar seus arquivos da mesma forma que um adolescente de 13 anos faz com o seu quarto, não é uma coisa boa a se fazer, nem pra si mesmo e nem pro projeto.

Senhoras e senhores, lhes apresento o [PHP-FIG](http://www.php-fig.org/), um site muito bacana, te ensina a fazer brownies maravilhosos.

Brincadeira, se quer brownies, melhor procurar no [tio](www.google.com).

O PHP-FIG é um grupo de frameworks que trabalham para criar recomendações muito bacanas, vale a pena você fuçar um pouco no site :p

---------------

### Antes de tudo, tu consegue ler em inglês?

Não que você realmente precise ser aquele fluente 100% falante do inglês, mas garanto que se você conseguir pelo menos ler alguns artigos em inglês, vai te ajudar muito. Tem uma extensão do Chrome Translate, ele te ajuda e me salva quando encontro algumas palavras dificeís. Se você não sabe ler nem um pouco de inglês, sugiro que desde já comece à estudar, quero dizer, caso você queria aproveitar o máximo da internet e os conhecimentos que ela oferece.

---------------

Lá, eles tem uma sessão só de recomendações, ou as famosas PSRs - PHP Standard Recommendations.

Aqui vai uma listinha muito bacana sobre as tais PSRs:

1. [PSR-1: Basic Coding Standard](http://www.php-fig.org/psr/psr-1/)
1. [PSR-2: Coding Style Guide](http://www.php-fig.org/psr/psr-2/)
1. [PSR-3: Logger Interface](http://www.php-fig.org/psr/psr-3/)
1. [PSR-4: Autoloader](http://www.php-fig.org/psr/psr-4/)
1. [PSR-6: Caching Interface](http://www.php-fig.org/psr/psr-6/)
1. [PSR-7: HTTP message interfaces](http://www.php-fig.org/psr/psr-7/)

Esses PSRs foram os oficiais, mas [eles tem uma lista](http://www.php-fig.org/psr/) de outros que ainda estão em review e outros como rascunhos.

Ainda sobre escrever bem:

Já pensou que poderia estar fazendo tudo errado? Ou esquecendo algo...bom, só vamos saber quando o erro aparecer, né? Mas é bom previnir. *[PHP The Right Way](http://www.phptherightway.com/)*, é uma referência sobre como escrever e trabalhar com o PHP do jeito certo. Okok, eu sei que ninguém é dono da verdade absoluta, mas nada te impede de aproveitar. 

Se quiser, tem a tradução dele [bem aqui](http://br.phptherightway.com/).

Bom, se tem o jeito certo de escrever, então também dever ter o jeito errado. [PHP The Wrong Way](http://www.phpthewrongway.com/) e a sua tradução, [PHP da maneira errada](http://www.phpthewrongway.com/pt_br/).

## Escrever bem não é tudo

Um bom escritor não escreve um bestseller da noite pro dia, sem um plano é claro. 

Escrever bem e não ter um plano, é a mesma coisa que nada: você vai escrever muito bem, e vai apagar tudo que escreveu várias vezes porque organizando os arquivos da forma Y é melhor que X. E daqui há alguns meses, vai mudar tudo porque Z é melhor que XY. Isso se você estiver trabalhando sozinho, porque se estiver em um grupo, vai ter que aguentar a equipe te perguntando o que raios significa *prntUrDta()* ou qualquer coisa pior.

> Ah, mas eu posso usar um framework, todo mundo vai saber trabalhar!

Exato. Mas e se nenhum framework ou coisa do tipo, saciar o projeto em questão? E se toda a equipe precisar trabalhar do zero?

Gerenciar, idealizar e montar um esquema de pastas, bancos, arquivos e etc pode ser doloroso demais. Não que seja ruim criar algo do zero, mas e se você tivesse alguns possíveis *padrões de projetos* para seguir? 
Ao invés de ficar o resto do mês quebrando a cabeça organizando arquivos e pastas, iria terminar seu projeto rapidinho.

Conheça os *Design Patterns*, ou, *Padrões de Projetos*. São padrões para você seguir e conseguir manter seu projeto de uma forma que, seja produtivo e que ajude futuras alterações e melhorias no código.

Só pra responder algumas questões e te dar um background sobre o que eu estou falando, leia:

[O que são Design Patterns?](http://www.princiweb.com.br/blog/programacao/design-patterns/o-que-sao-design-patterns.html)

[Uma pequena introdução](http://www.devmedia.com.br/introducao-design-pattern/18838)

Existem vários padrões de projetos super bacanas e úteis pra seguir. Eles são ótimos, e o melhor de tudo é que você **não tem que seguir o padrão escolhido por completo**, você simplesmente pode alterar coisas que não lhe serão úteis e até adicionar o que você precisa.

A ideia é que através dos padrões de projeto você consiga ter uma ideia de como seguir com o projeto sem que te afete lá na frente - quero dizer, a gente sempre se lasca com atualizações, mas vamos tentar diminuir a dor.

Esses são alguns dos padrões de projetos mais conhecidos hoje em dia(você não precisa decorá-los, faça como eu, só dê uma lida por cima e no que mais te agradar, vai fundo).

Obs.: vou pegar só alguns artigos, nada tão profundo. No que você gostar, mergulha de cabeça.

1. [Factory](http://code.tutsplus.com/pt/tutorials/design-patterns-the-simple-factory-pattern--cms-22345)
1. [Singleton](http://code.tutsplus.com/pt/tutorials/design-patterns-the-singleton-pattern--cms-23073)
1. [Strategy](http://blog.caelum.com.br/entendendo-o-pattern-strategy-em-php/)
1. [Front Controller e Command](http://www.devmedia.com.br/padroes-de-projetos-introducao-aos-padroes-front-controller-e-command/30644)

<br>

Até aqui, posso deduzir que você já sabe um pouco de OO, PDO, escrever bem e até tem uma ideia sobre padrões de projetos. O que acha de praticar? Vou lançar um pequeno desafio aqui:

Vá no seu Github, Bitbucket, ou na sua própria máquina mesmo, isso não importa, crie uma pasta chamada **worke**(ou dê algum nome outro nome, sua escolha). Depois de criar, comece a projetar um simples CRUD - Create, Read, Update and Delete. 

Não precisa de um super design, não precisa contratar ninguém pra fazer o front-end, você pode deixar do jeito que está, só precisa praticar o que aprendeu até agora.

O **worke**, é um sistema de cadastro de funcionários. Certifique-se de ter:

1. Login/logout
1. Registro de novos funcionários
1. Uma tela pra exibir todos os funcionários em uma lista
1. Mudar dados de algum funcionário
1. Remoção de funcionários

Deixe guardado em algum lugar. Daqui algum tempo, volte para ver o projeto. Isso te dará uma visão panorâmica de como você mudou.

## E se...

O que acha de ter uma ferramenta só pra gerenciar as libraries/plugins que você usa? Algo que trate das versões, gerencie suas atualizações, dê um belo controle e tals, seria ótimo né?

Pra quem já está familiarizado com o Github e com o front-end, com certeza já ouviu falar do NPM e do Bower.

Sem mais delongas, vos apresento o **Composer**. Um gerenciador de dependências pro PHP \o

Caso esteja curioso sobre, sugiro que leia [este artigo do Tableless](http://tableless.com.br/composer-para-iniciantes/).

Você pode obtê-lo direto do [site oficial](https://getcomposer.org/)

--------------

Isso foram as dicas que funcionaram pra mim e acredito que também vão te ajudar.

Se você gostou do artigo, viu algo errado ou tem alguma ideia sobre o assunto, eu gostaria muito que fizesse um comentário a respeito!

Esse artigo vai permanecer "em aberto", ou seja, está sujeito à alterações conforme novas coisas forem surgindo - quem sabe não rola uma parte 2? :P