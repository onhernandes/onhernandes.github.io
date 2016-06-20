---
layout: page
title: Séries
permalink: /series
---

<section id="projects">
	<h1>{{ page.title }}</h1>
	<section>
		{% for tag in site.categories %}
		<article>
			<h2>{{ tag[0] }}</h2>
			<ul>
				{% assign pages_list = tag[1] %}
				{% for post in pages_list reversed %}
				{% if post.title != null %}
				{% if group == null or group == post.group %}
				<li>
					<a href="{{ post.url }}">
						{{ post.title }} 
						<h5>
						    {{ post.date | date: "%d/%m/%Y" }}
      					</h5>
					</a>
				</li>
				{% endif %}
				{% endif %}
				{% endfor %}
				{% assign pages_list = nil %}
				{% assign group = nil %}
			</ul>
		</article>
		{% endfor %}
	</section>
</section>