# 11ty - Tailwind "JIT" _(Just In Time)_ CSS starter

The nifty thing about this [Tailwind "JIT"](https://github.com/tailwindlabs/tailwindcss-jit) starter for Eleventy is that you can see your changes take effect while you type into your templates, making it much easier to ask yourself, "How would it look if I changed `mx-2` to `mx-4`?" when you're totally new to Tailwind and can't imagine it all from memory.

_(You might have to play with `/src/tailwind/tailwind.config.js` if you're using, say, `.11ty.js` templates, so as to add them to the "watched" files.)_

Many thanks to [Darrik Moberg](https://www.darrik.dev/) for the code on which this is modeled, and for all the debugging help adapting it to Tailwind JIT.  I can't really take credit for this code -- just for stripping it down to a starter.

Thanks also to [Mike Allanson](https://www.mikeallanson.com/) for additional troubleshooting.

Known issue:  every once in a while, particularly as you start overwhelming Tailwind JIT with things like plugins and a larger template codebase, your changes might stop taking effect on the screen served by your running development server _(you can see that things stop getting freshly written out to `/dist/tailwindoutlive.css`)_.

Solution:  restart your server once or twice.  Now that Tailwind JIT builds quickly, rather than taking up to a minute like legacy Tailwind, you should be fine, other than it being a bit of a nuisance.

Live example at [https://11tytailwindjit.netlify.app/](https://11tytailwindjit.netlify.app/)