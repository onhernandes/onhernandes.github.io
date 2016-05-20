---
layout: page
title: Projetos
permalink: /projetos
---

{% for post in site.tags[page.tag] %}
<article>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h2>{{ post.title }}</h2>
    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5></a>
  <p>
    {{ post.excerpt }}
  </p>
</article>
{% endfor %}