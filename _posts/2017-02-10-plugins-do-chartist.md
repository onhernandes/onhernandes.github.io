---
layout: article
title:  "Chartist.js - Plugins"
date:   2017-02-10 10:21:20 -0300
image: charts-print-plugin.jpg
category: js
intro: 'Plugins para o Chartist.js'
---

Eu nem sei por onde começar - sinceramente -, mas eu sei que se você ainda não leu [esse post](/chartist/), está perdendo uma coisa incrível! (e vai precisar ter lido ele pra entender esse aqui)

## O que é esse tal de Chartist.js?
Um breve resumo aqui, ele é uma lib de charts, feito com JS puro e CSS. Eis aqui um simples exemplo:

![Exemplo do Line Charts](/assets/img/charts-print-normal.jpg)

Se quiser saber mais, [tem um post introduzindo ele aqui](http://blog.pineb.com.br/chartist/).

## Plugins

O Chartist.js tem alguns plugins muito bacanas para melhorar as coisas, caso queira ver todos os plugins, basta [clicar aqui para abrir a página de exemplos](http://gionkunz.github.io/chartist-js/plugins.html) e ver tudo funcionando perfeitamente lá.

## Começando

Considerando que você já tenha os arquivos básicos do Chartist.js, você só vai precisar:

1. Baixar e inserir o script do plugin que escolheu, no nosso caso o Point Label
1. Dizer ao Chartist que está usando um plugin, e se quiser até configurá-lo


## É hora de morfar!

Como dito antes, vou usar o [Point Label](https://github.com/gionkunz/chartist-plugin-pointlabels) que é um plugin bem bacana, ele exibe a quantia exata referente à localização de um ponto em um chart. 

Todos os plugins que eu vi usam apenas um arquivo em JS, então não se preocupe com várias requisições no seu site por causa de um único plugin - se quiser, pode mesclar tudo em um só. É doidera, eu sei, mas tá valendo.

Clone o repositório do plugin ou apenas pegue o arquivo necessário - chartist-plugin-pointlabels.js

{% highlight git %}
	git clone https://github.com/gionkunz/chartist-plugin-pointlabels.git
{% endhighlight %}

Abaixo do Chartist, chame o script do plugin:

{% highlight html %}
	<main>
	<!-- conteúdo aqui -->
	</main>
	<!-- arquivo do chartist.js padrão -->
	<script src="chartist.min.js"></script>
	<!-- plugin-que-voce-escolheu.min.js -->
	<script src="chartist-plugin-pointlabels.js"></script>
{% endhighlight %}

Nas configurações do Chartist - sim, na mesma váriavel de opções -, ative o plugin:

{% highlight javascript %}
	var data = {
		labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
		series: [
			[5, 2, 4, 2, 0]
		]
	};

	var options = {
		lineSmooth: false,
		fullWidth: true,
		showArea: true,
		plugins: [
		    Chartist.plugins.ctPointLabels({
		      textAnchor: 'middle'
		    })
		]
	};

	new Chartist.Line('.ct-chart', data, options);
{% endhighlight %}

E pronto! Se liga no resultado:

![Resultado do Line Charts](/assets/img/charts-print.jpg)

Se quiser ver mais exemplos do Chartist.js puro, [clique aqui](http://gionkunz.github.io/chartist-js/examples.html)

Se quiser ver exemplos com plugins, [aqui](http://gionkunz.github.io/chartist-js/plugins.html).

A documentação? [Aqui](http://gionkunz.github.io/chartist-js)

O repositório no Github? [Aqui](https://github.com/gionkunz/chartist-js)

Bom, acredito que é só!

O que tu achou? Comenta aí embaixo!