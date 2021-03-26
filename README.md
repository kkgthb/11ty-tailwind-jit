# 11ty - Tailwind "JIT" _(Just In Time)_ CSS starter

The nifty thing about this [Tailwind "JIT"](https://github.com/tailwindlabs/tailwindcss-jit) starter for Eleventy is that you can see your changes take effect while you type into your templates, making it much easier to ask yourself, "How would it look if I changed `mx-2` to `mx-4`?" when you're totally new to Tailwind and can't imagine it all from memory.

_(You might have to play with `/src/tailwind/tailwind.config.js` if you're using, say, `.11ty.js` templates, so as to add them to the "watched" files.)_

Many thanks to [Darrik Moberg](https://www.darrik.dev/) for the code on which this is modeled, and for all the debugging help adapting it to Tailwind JIT.  I can't really take credit for this code -- just for stripping it down to a starter.

Thanks also to [Mike Allanson](https://www.mikeallanson.com/) for additional troubleshooting.

## Known issues

### Issue 1

Every once in a while, particularly as you start overwhelming Tailwind JIT with things like plugins and a larger template codebase, your changes might stop taking effect on the screen served by your running development server _(you can see that things stop getting freshly written out to `/dist/tailwindoutlive.css`)_.

#### Solution 1

Restart your server once or twice.  Now that Tailwind JIT builds quickly, rather than taking up to a minute like legacy Tailwind, you should be fine, other than it being a bit of a nuisance.

### Issue 2

Tailwind seems to be sensitive to the value of the `NODE_ENV` environment variable, and this might not work w/ null values for that variable.

#### Solution 2

Make sure to adjust your build process to set it to `production` or `development` appropriately.  You might do this through `package.json` if you're running simple commands.

Personally, I enjoy the environment-variable injection of built-site-hosting CLI tools like the Netlify CLI _(which makes use of server-stored environment variable values, values set in `netlify.toml`, and, while running `netlify dev`, values set in `.env` files on your local machine)_, and keeping my `package.json` files clean.

I prefer the CLI tool approach because I typically code on a Windows machine but deploy to a Linux machine, which I find messy to code `package.json` around.

## Live example

[See this site live on Netlify](https://11tytailwindjit.netlify.app/)

## Build your own theme

You don't really need this "starter" to play with Tailwind.  Just grab these files:

1. [/src/_data/tailwindcss.js](https://github.com/kkgthb/11ty-tailwind-jit/blob/main/src/_data/tailwindcss.js)
2. [the 2 files under /src/tailwind](https://github.com/kkgthb/11ty-tailwind-jit/tree/main/src/tailwind)
    * _(you should probably change the config to be a little more specific to your use of Tailwind)_
3. [/src/postcss.config.js](https://github.com/kkgthb/11ty-tailwind-jit/blob/main/src/postcss.config.js)
4. [/utils/postcss.js](https://github.com/kkgthb/11ty-tailwind-jit/blob/main/utils/postcss.js)

Your `package.json` will need a few dependencies:

```json
{
    "@11ty/eleventy": "latest",
    "@tailwindcss/jit": "latest",
    "autoprefixer": "latest",
    "postcss": "latest",
    "postcss-cli": "latest",
    "sass": "latest",
    "tailwindcss": "latest"
}
```

And your `.eleventy.js` config could use a little help:

```js
  // Sometimes handy for making sure your browser refreshes the CSS
  eleventyConfig.addShortcode("version", function () {
    return String(Date.now());
  });
  // Apparently this, on top of the PostCSS pruning options watching 11ty, helps 11ty watch Tailwind or something.
  eleventyConfig.addWatchTarget("./dist/tailwindoutlive.css");
```

Sprinkle them into _any_ starter and ... ta-daaaa!  It's a Tailwind starter.
