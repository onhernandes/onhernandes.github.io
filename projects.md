---
layout: page
title: Projetos
permalink: /projetos
---
<section id="projects">
	<h1>{{ page.title }}</h1>
	<section>
		{% for post in site.posts %}  
			{% for cat in post.categories %}
				{% if cat == "project" %}
					<article>
						<h2>
							{{ post.title }}
						</h2>
						<p>
							{{ post.excerpt }}
						</p>
						<a href="{{ post.url }}"><button>continue lendo</button></a>
					</article>
				{% endif %}
			{% endfor %}
		{% endfor %}
	</section>
</section>

{% comment %}
{% endcomment %}
