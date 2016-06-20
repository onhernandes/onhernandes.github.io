---
layout: post
title:  "Chartist.js e seus maravilhosos plugins"
date:   2016-06-20 20:21:20 -0300
image-header: charts-print-plugin-header.jpg
image: charts-print-plugin-fb.jpg
categories: html chartist
intro: 'Como se não bastasse ser um plugin amável, o Chartist.js também tem uns plugins que fazem os olhos de qualquer dev brilhar...'
---
# {{ page.title }}
Eu nem sei por onde começar - sinceramente -, mas eu sei que se você ainda não leu [esse post](http://blog.pineb.com.br/chartist/), está perdendo uma coisa incrível! (e vai precisar ter lido ele pra entender esse aqui)
example-js 'chartist-e-seus-plugins.js'

## O que é esse tal de Chartist.js?
Um breve resumo aqui, ele é um lindo plugin de charts, feito com JS puro e CSS. Eis aqui um simples exemplo:

![Exemplo do Line Charts](../img/posts/charts-print.jpg)

Se quiser saber mais, [tem um post introduzindo ele aqui](http://blog.pineb.com.br/chartist/).

### Um plugin...pra outro plugin?
Sim, é basicamente isso. O Chartist.js pode ser considerado um plugin..que tem outros plugins! Bom, é assim que eles chama [lá no site oficial](http://gionkunz.github.io/chartist-js).

## Poxa...
Eu não vou poder colocar todos os exemplos de plugins, por apenas um motivo:
1. Eu sou muito inteligente e fiz uma linda gambiarra pra tentar rodar um modelo simples aqui, mas parece que não deu, hora funcionava hora sei lá o que e tudo ficava zoado.

Calmâe! Eu vou colocar o plugin que eu mais gostei e estou usando em um projeto particular, se você quiser mais, só seguir os mesmos passos e você vai conseguir usar os plugins que quiser. 

Eu sei que é ruim ver por uma imagem, só que criar um arquivo somente pra usar como exemplo, não seria útil, tu iria ter que abrir a outra página, só pra ver ele funcionando sendo que pode abrir a página de [exemplos](http://gionkunz.github.io/chartist-js/plugins.html) e ver tudo funcionando perfeitamente lá.

## Antes de tudo
Considerando que você já tenha os arquivos básicos do Chartist.js, você só vai precisar:

- -- Baixar e inserir o script do plugin que escolheu, no nosso caso o Point Label
- -- Especificar ao Chartist que está usando um plugin, e se quiser até configurá-lo

## É hora de morfar!
Como dito antes, vou usar o [Point Label](https://github.com/gionkunz/chartist-plugin-pointlabels) que é um plugin bem bacana, ele exibe a quantia exata referente à localização de um ponto em um chart. 

Todos os plugins que eu vi usam apenas um arquivo em JS, então não se preocupe com várias requisições no seu site por causa de um único plugin - se quiser, pode mesclar tudo em um só. É doidera, eu sei, mas tá valendo.

Clone o repositório do plugin ou apenas pegue o arquivo necessário(chartist-plugin-pointlabels.js).

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

![Resultado do Line Charts](../img/posts/charts-print-plugin.jpg)

Se quiser ver mais exemplos do Chartist.js puro, [clique aqui](http://gionkunz.github.io/chartist-js/examples.html)

Se quiser ver exemplos com plugins, [aqui](http://gionkunz.github.io/chartist-js/plugins.html).

A documentação? [Aqui](http://gionkunz.github.io/chartist-js)

O repositório no Github? [Aqui](https://github.com/gionkunz/chartist-js)

Bom, acredito que é só!

O que tu achou? Comenta aí embaixo!