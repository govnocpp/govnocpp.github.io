---
layout: default
title: Gallery of Undefined Behavior
---
<h1 class="page-header">Welcome!</h1>

This website is a showcase of [undefined behavior](http://en.wikipedia.org/wiki/Undefined_behavior) in the C and C++ programming languages.

Undefined behavior (UB) occurs when the programmer writes code for which the language is not required by the standard to behave in any sane way. What it means is that *anything can happen*. Code with undefined behavior can crash, format your hard drive, send an angry e-mail to your boss, [make demons fly out of your nose](http://catb.org/jargon/html/N/nasal-demons.html), or simply do nothing.

But we here at UB.org are not interested in just any kind of undefined behavior. For example, take the most archetypal example of undefined behavior -- dereferencing a null pointer:

{% highlight c %}
int *p = NULL;
int oops = *p;
{% endhighlight %}

However, such code is not an *interesting* case of undefined behavior. On most modern systems, except maybe some embedded systems, it will simply crash (the reason why is a bit technical). In general, dereferencing a null pointer is obviously wrong to even a novice C/C++ programmer, and thus the code is obviously wrong. However, consider this code, the classic double increment UB:

<a class="ideone" href="http://ideone.com/3M4ev7">ideone</a>
{% highlight c %}
int i = 5;
i = ++i + ++i;
{% endhighlight %}

This code, on the other hand, *is* interesting. Not only do novice programmers -- and even experienced ones -- actually write this kind of code, but it isn't immediately evident what it *should* do, and it gives different results on different C and C++ implementations -- and even in programming languages where this behavior is defined, the results are often not what one would expect. It is, in fact, [the first example](/examples/double-increment/) on this very site!

In general, the definition of an "interesting" snippet of UB code can be fuzzy. Here are some pointer questions to help you decide:

* Is the behavior counterintuitive?
* Does it do different things under different systems/compilers?
* Does an equivalent construct do different things in other programming languages?
* Has real production code in the wild been bitten by this behavior?
* Are there valuable lessons programmers can learn from showcasing this code?

If you answered yes to *some* of these questions, then perhaps it is time to [submit](/submit/) your UB code to this website with an explanation of why it behaves the way it does, and have it serve as a warning for future programmers to come!
