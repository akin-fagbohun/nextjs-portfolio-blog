---
title: 'Why I Love Next.js'
date: '2022-05-30'
read: '4 min read'
---

In one of my earlier projects, I created an article site where a user is able to navigate a UI that contains articles fetched by API from a database (which I also built). This got me thinking about this portfolio site and what I would like to do with it in the long term as I progress through my tech career.

It wasn’t long before I started to feel that in order for this portfolio to have some longevity, I would need to be adding to it on a regular basis with projects, and one really cool way that I could do this would be through a blog/article section. You see, I felt that adding something like this would give me a chance to organise my thoughts throughout the journey, but also give some flavour to the occasional visitor that might stop by to view my portfolio (...hello hiring partner 👋🏾).

Not to digress too much, I came to the conclusion that integrating a project like the article site that I built into my portfolio would be great, and as Next.js kept cropping up as a technology that would serve me well to understand, I thought it would be a good idea to explore it with this blog project... So with that said, If you are reading this post that means that my build was a success and that you are looking at my first portfolio post on my portfolio blog, built with Next.js —That’s a mouthful!

So to finally state why I love Next.js, these are my thoughts based on what I learnt building this first project.

## Code Splitting and Pre-Fetching

Wow, wow, wow. As a conneseur of the web, few things make me happier than a performant experience so when I experienced the snappiness of a Next.js application, I fell in love with it. Here’s how it goes...

Code splitting only loads what is necessary to serve the page that the client is presenting to the user. This in itself means that the network capacity is focused on a single task and that the page reaches the user’s eyeballs at a noticably quicker speed. On top of that, when linking between internal pages, using the provided `Link` component, as opposed to the conventional `<a href="blah">`, Next.js automatically begins pre-fetching in the background the pages that are directly linked to from the current page — as if to say the user _might_ want to look at another page, and what better way to make them happy then to give them a relatively instant experience?! This is out of the box too, so no React Router required!

Implementation is pretty easy, but there are a few gotcha’s to keep in mind. the relative link for your destination is added to the `Link` component, and we still need to wrap the link text in `<a></a>` tags, which is jarring at first sight considering that any css classes still need to be placed in the `<a>` tag... Even reading that back is a little weird, so here’s an example.

```jsx
<code>
  <Link href="/pages/internal-page">
    <a className="someCssClass">Link Text</a>
  </Link>
</code>
```

## Styling

Out of the box, Next.js has a number of options that you can just get on with, be that CSS, Sass, or if you like libraries, you can also tuck into something like Tailwind or Emotion without too much difficulty. I tend to enjoy plain old CSS for now as I’m still exploring its limitations with pseudo classes and transitions, but I take a lot of comfort in knowing that as I start to leverage other libraries, they aren’t going to feel like square pegs in round holes.

Before I forget, I should also give a nod to the convenience of CSS modules. I’m still exploring this, but I loved the relief of being able to think a little less about clean naming of classes, because of the way Next.js bundles the CSS at build time! No collisions sounded like music to my ears, and on the face of it, it was lovely!

## Middleware

Don’t get me wrong. I love Express and that’s precisely the reason why I can say that I enjoy Next.js. The fact that it has some inbuilt middleware functionality is an absolute boon if I’ve ever seen one. The ability to interact directly with APIs in much the same way that Express allows without the need for extra packages is a nice convenience, for sure. Is it limited? I’m going to assume so, but for now, I like it!

## Conclusion

So there you have it. My early thoughts on Next JS based on some relatively limited but valuable experience. I built this entire blog using this framework and while very slightly tricky in parts, it was pretty easy to transfer regular React concepts to get the project going. All that is left to do is build on the styling in my usual contemporary UI flavour, but I think that will be a future evolution.

I’m currently looking for a permanent development role so if you have an exciting project that I can be a part of, I’m all ears! Get in touch directly via [LinkedIn](https://www.linkedin.com/in/akinfagbohun/)...
