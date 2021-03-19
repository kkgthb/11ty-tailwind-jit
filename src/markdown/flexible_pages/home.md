---
title: 11ty Tailwind JIT CSS starter
description: Play with Tailwind efficiently in Eleventy
permalink: /index.html
cta:
  title: 11ty is fast
  subtitle:  So is Tailwind JIT
  link1:
    url: https://github.com/kkgthb/11ty-tailwind-jit
    text: See the source code
  link2:
    url: https://app.stackbit.com/create?theme=https://github.com/kkgthb/11ty-tailwind-jit
    text: Create with Stackbit and skip installing Node.js!
banner: I hope you'll try it yourself.
exercise:
    message: Go edit the theme file <code>/src/_includes/components/banner.liquid</code> and change all occurrences of <code>bg-indigo</code> to <code>bg-green</code> while running 11ty on a live development server.  Watch your page change instantly before your eyes!  Tailwind, is recompiling your CSS file behind the scenes, so it's kind of a big deal for it to run this fast.
    link:
        url: /tailwindoutlive.css
        text: See your current CSS file
footer: This exercise brought to you by <a href="https://katiekodes.com/" target="_blank">Katie Kodes</a>
---

{% include 'components/call_to_action.liquid' the_include:cta %}
{% include 'components/banner.liquid' the_include:banner %}
{% include 'components/text_block.liquid' the_include:exercise %}
{% include 'components/footer.liquid' the_include:footer %}
