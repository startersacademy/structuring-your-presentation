# structuring-your-presentation
Presentation for San Diego JS speaker workshop about how to structure the content for a talk and make it more interesting.

## Install dependencies

1. Install node.js.
2. Install node dependencies, with the command:

  `npm install`

## View the Presentation

  `npm run present`

## Develop the Presentation

* Edit the slides from `slides` folder (html or [markdown](https://www.npmjs.com/package/marked))
* If you need some assets, you can work in `images`, `css`, `js`, `media` folders and use `includes.txt`
* The slideshow is automatically built into `build` folder
* The slideshow is hosted and the browser is opened to localhost:9000
* Any change you make will rebuild and refresh the browser
* Oh, and a printer-friendly `slides.pdf` is automatically generated on any change too

### Slides structure and format

* Slides and chapters are sorted by name.
* If a slide or a chapter name starts with a dot `.` (hidden), it will be skipped. (or use `--keep-hidden`)
* You can number your slides to ensure order by adding a "*number*-" prefix, it will be automagically stripped out.
* Each slide will have an id generated from filename (removing accents and spaces).
* If you use `--sub-covers` the title is the stripped name, accents and case remain untouched.

#### Sample structure

```
images/
js/
css/
slides/
  01-intro.md
  02-Chapter 1/
    01-hello-world.md
    02-bonjour-monde.md
  03-conclusion.md
```

The only required directory is `slides`. The other directories are for custom content.

#### Sample slide

```md
# Slide's title

Content of the slide

note:

Your notes go here.

Complex (multiline, code samples, etc.) notes are really supported only with --such-notes.
```

#### Customize slide attributes

You can set per-slide properties like general style, [background](https://github.com/hakimel/reveal.js/#slide-backgrounds) or [transition](https://github.com/hakimel/reveal.js/#slide-transitions) by adding special lines at **the head of your slides**:

* Add class: `$class:some class$`
* Replace automatic id: `$id:id$` If you set it to "none", it will remove any id on the slide
* Any other property will be added as a data-attribute, here are some examples supported by Reveal:
  * `$background:/path/to/image.jpg$`
  * `$background-video:/path/to/video.webm$`
  * `$background-iframe:http://mysite.com$`
  * `$transition:zoom$`
  * `$transition-speed:fast$`

## Command Usage

* The `serve` script will open a browser window with the presentation and keep it and a pdf version of the presentation updated as you make changes:

  `npm run serve`

* If you just want the build to stay current, use:

  `npm run watch`

* To just build the pdf, use:

  `npm run print`

### Adjust Options

Under the covers, [prez](https://github.com/lmtm/prez) is used to build and serve the presentation. It offers several options to modify the presentation output. To use any of these options, add the option after `npm run command -- `. For example, to create more remove for speaker notes, use this:

  `npm run present -- --such-notes`

### Configuration File

Alternatively, you can set the options in the .prezrc file.

### Available options:

* `-v`, `--version`: show version and exit
* `-s <dir>`, `--slides-dir=<dir>`: customize name of the folder containing slides (default = `slides`)

#### Assets & slides

* `--skip-reveal`: do not copy reveal.js slides into target directory (useful if you want faster build over existing build)
* `--skip-index`: do not generate `index.html` in target (will remain untouched if already existing)
* `--skip-user`: do not include user assets
* `--keep-hidden`: render slides or chapters starting with a dot `.`
* `--sub-covers`: auto generate cover slides with the dir name as a h1 for each group of vertical slides

#### Meta

* `--title=<title>`: specify the title of your presentation (default = `package.json name` if found or `Prez`)
* `--author=<author>`: specify the author of your presentation (default = `package.json author` if found)
* `--description=<description>`: specify the description of your presentation (default = `package.json description` if found)

#### Theme

* `--theme=<theme>`: choose [reveal theme](https://github.com/hakimel/reveal.js/tree/master/css/theme) (default = `solarized`)
* `--highlight-theme=<theme>`: choose [highlight.js theme](https://github.com/isagalaev/highlight.js/tree/master/src/styles) (default = `zenburn`)
* `--no-dynamic-theme`: disable ability to change theme from query string
* `--print-notes`: enable special print layout with first-class notes
* `--such-notes`: focus on notes, which will enable a special print layout with notes as first-class content, and more space for them in the notes popup

#### Live server

* `--serve[=<port>]`: serve slideshow (you can specify port here or use `--port`)
* `-p <port>`, `--port=<port>`: modify http server port (default 9000), you can use value `auto` to use a random available port
* `--no-live-reload`: disable live-reload when serving slideshow
* `--no-open-browser`: do not open local browser automatically when serving slideshow

#### Print

* `--print[=<file>]`: print slideshow as pdf (requires `--serve` and phantomjs must be installed)
* `--print-theme=<theme>`: theme to be used for pdf output (default = no override)
* `--phantomjs=<path to phantomjs>`: path to phantomjs (default = `phantomjs`)

#### Misc

* `--no-update-notifier`: disable version checking


## Initialize a Presentation

To generate a default presentation (and potentially blow away any work you have already done):

1. In package.json, modify the config object if necessary. By default source files will be in `./source`, built files will go in `./build`. If files exist in these directories, they will be overwritten.
2. From the command line:

  `npm run init`


