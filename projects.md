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
				{% if cat == "update" %}
					<article>
						<h2>
							{{ post.title }}
						</h2>
						<p>
							{{ post.excerpt }}
						</p>
					</article>
				{% endif %}
			{% endfor %}
		{% endfor %}
	</section>
</section>

{% comment %}
{% endcomment %}
