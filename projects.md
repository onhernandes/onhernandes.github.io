---
layout: page
title: Projetos
permalink: /projetos
---
<section id="projects">
	<h1>{{ page.title }}</h1>
	<section>
		{% for post in site.posts %}
			{% assign post.categories = cat  %}
			{% if post.categories contains 'project' %}
				<article>
					<h2>
						{{ post.title }}
					</h2>
					<p>
						{{ post.intro }}
					</p>
					<a href="{{ post.url }}"><button>continue lendo</button></a>
				</article>			
			{% endif %}			
		{% endfor %}
	</section>
</section>