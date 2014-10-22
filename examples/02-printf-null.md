---
layout: example
title: Using <code>NULL</code> in <code>printf</code>
permalink: /examples/printf-null/
---

Do these two code snippets do the same thing?

<a class="ideone" href="http://ideone.com/upKb24">ideone</a>
{% highlight c %}
printf("%s\n", NULL);
{% endhighlight %}

<a class="ideone" href="http://ideone.com/7pjvtw">ideone</a>
{% highlight c %}
const char str[] = "%s\n";
printf(str, NULL);
{% endhighlight %}

This is the base Jekyll theme. You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.com](http://jekyllrb.com/)

You can find the source code for the Jekyll new theme at: [github.com/jglovier/jekyll-new](https://github.com/jglovier/jekyll-new)

You can find the source code for Jekyll at [github.com/jekyll/jekyll](https://github.com/jekyll/jekyll)

