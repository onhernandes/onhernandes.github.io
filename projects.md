---
layout: page
title: Projetos
permalink: /projetos
---

{% for post in site.posts %}
<article>
  <a href="{{ post.url | prepend: site.baseurl }}">
    <h2>{{ post.title }}</h2>
    <h5>{{ post.date | date: "%b %-d, %Y" }}</h5></a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad vel, distinctio, quod id nihil non quisquam vitae aliquam suscipit sapiente. Tempora maiores sequi quidem laborum aut molestiae nesciunt, vitae placeat.
  </p>
</article>
{% endfor %}